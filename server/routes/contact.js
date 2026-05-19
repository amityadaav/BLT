const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();

const Contact = require("../models/Contact");
const { validateContact } = require("../middleware/validate");

// ── Stricter rate limit for contact form ──
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: {
    error: "Too many contact submissions. Please try again after an hour.",
  },
});

// ────────────────────────────────────────
//  POST /api/contact
//  Used by: ContactPopup, ConsultationPopup, ConversationPopup
// ────────────────────────────────────────
router.post("/", contactLimiter, validateContact, async (req, res) => {
  try {
    const { name, email, phone, message, company, industry, subject } = req.body;

    // Detect source from subject line set by the frontend
    let source = "contact";
    if (subject?.toLowerCase().includes("consultation")) source = "consultation";
    else if (subject?.toLowerCase().includes("conversation")) source = "conversation";

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      company,
      industry,
      subject,
      source,
      ipAddress: req.ip || "",
    });

    console.log(`📩 [Contact] New ${source} submission from ${email}`);

    return res.status(201).json({
      success: true,
      message: "Message received! We'll get back to you soon.",
      id: contact._id,
    });
  } catch (err) {
    console.error("Contact route error:", err.message);

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(" ") });
    }

    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// ────────────────────────────────────────
//  GET /api/contact  (admin — all submissions)
// ────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const {
      status,
      source,
      page = 1,
      limit = 20,
      sort = "-createdAt",
    } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (source) filter.source = source;

    const skip = (Number(page) - 1) * Number(limit);

    const [contacts, total] = await Promise.all([
      Contact.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      Contact.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: contacts,
    });
  } catch (err) {
    console.error("Contact GET error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  PATCH /api/contact/:id/status  (admin)
// ────────────────────────────────────────
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["new", "read", "replied", "archived"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) return res.status(404).json({ error: "Contact not found." });

    return res.json({ success: true, data: contact });
  } catch (err) {
    console.error("Contact PATCH error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  DELETE /api/contact/:id  (admin)
// ────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found." });
    return res.json({ success: true, message: "Contact deleted." });
  } catch (err) {
    console.error("Contact DELETE error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;