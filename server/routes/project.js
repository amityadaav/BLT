const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();

const Project = require("../models/Project");
const { validateProject } = require("../middleware/validate");

// ── Rate limit ──
const projectLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: "Too many project submissions. Please try again after an hour." },
});

// ────────────────────────────────────────
//  POST /api/project
//  Used by: StartProjectPopup
// ────────────────────────────────────────
router.post("/", projectLimiter, validateProject, async (req, res) => {
  try {
    const { name, email, company, budget, projectType, message } = req.body;

    const project = await Project.create({
      name,
      email,
      company,
      budget,
      projectType,
      message,
      ipAddress: req.ip || "",
    });

    console.log(`🚀 [Project] New request from ${email} — ${projectType || "unspecified"}`);

    return res.status(201).json({
      success: true,
      message: "Project request submitted successfully! We'll be in touch soon.",
      id: project._id,
    });
  } catch (err) {
    console.error("Project route error:", err.message);

    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(" ") });
    }

    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// ────────────────────────────────────────
//  GET /api/project  (admin)
// ────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const {
      status,
      projectType,
      budget,
      page = 1,
      limit = 20,
      sort = "-createdAt",
    } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (projectType) filter.projectType = projectType;
    if (budget) filter.budget = budget;

    const skip = (Number(page) - 1) * Number(limit);

    const [projects, total] = await Promise.all([
      Project.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      Project.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: projects,
    });
  } catch (err) {
    console.error("Project GET error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  GET /api/project/:id  (admin)
// ────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).lean();
    if (!project) return res.status(404).json({ error: "Project not found." });
    return res.json({ success: true, data: project });
  } catch (err) {
    console.error("Project GET/:id error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  PATCH /api/project/:id  (admin — update status / notes / assignee)
// ────────────────────────────────────────
router.patch("/:id", async (req, res) => {
  try {
    const validStatuses = ["new", "reviewed", "in-discussion", "quoted", "won", "lost"];
    if (req.body.status && !validStatuses.includes(req.body.status)) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const allowed = ["status", "assignedTo", "notes"];
    const updates = {};
    allowed.forEach((key) => {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    });

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!project) return res.status(404).json({ error: "Project not found." });

    return res.json({ success: true, data: project });
  } catch (err) {
    console.error("Project PATCH error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  DELETE /api/project/:id  (admin)
// ────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found." });
    return res.json({ success: true, message: "Project deleted." });
  } catch (err) {
    console.error("Project DELETE error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;