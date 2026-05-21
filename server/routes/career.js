// const express = require("express");
// const rateLimit = require("express-rate-limit");
// const path = require("path");
// const fs = require("fs");
// const router = express.Router();

// const CareerApplication = require("../models/Career");
// const upload = require("../middleware/upload");
// const { validateCareer } = require("../middleware/validate");

// // ── Rate limit for job applications ──
// const careerLimiter = rateLimit({
//   windowMs: 24 * 60 * 60 * 1000, // 24 hours
//   max: 3,
//   message: {
//     error: "You have submitted too many applications today. Please try again tomorrow.",
//   },
// });

// // ────────────────────────────────────────
// //  POST /api/career
// //  Used by: Career.jsx application form
// //  Accepts: multipart/form-data (resume file + text fields)
// // ────────────────────────────────────────
// router.post(
//   "/",
//   careerLimiter,
//   upload.single("resume"),   // multer processes the file
//   validateCareer,            // then validate text fields
//   async (req, res) => {
//     try {
//       const {
//         fullName, email, phone, position, experience,
//         currentCompany, portfolio, message,
//       } = req.body;

//       // Build resume info from multer
//       let resumeUrl = "";
//       let resumeOriginalName = "";
//       let resumeMimeType = "";
//       let resumeSize = 0;

//       if (req.file) {
//         resumeUrl = `/uploads/resumes/${req.file.filename}`;
//         resumeOriginalName = req.file.originalname;
//         resumeMimeType = req.file.mimetype;
//         resumeSize = req.file.size;
//       }

//       const application = await CareerApplication.create({
//         fullName,
//         email,
//         phone,
//         position,
//         experience,
//         currentCompany,
//         portfolio,
//         message,
//         resumeUrl,
//         resumeOriginalName,
//         resumeMimeType,
//         resumeSize,
//         ipAddress: req.ip || "",
//       });

//       console.log(`🎯 [Career] New application from ${email} for "${position}"`);

//       return res.status(201).json({
//         success: true,
//         message: "Application submitted! We'll review it and get back to you within 5–7 business days.",
//         id: application._id,
//       });
//     } catch (err) {
//       // If DB save fails, clean up uploaded file
//       if (req.file) {
//         fs.unlink(req.file.path, () => {});
//       }

//       console.error("Career route error:", err.message);

//       if (err.name === "ValidationError") {
//         const messages = Object.values(err.errors).map((e) => e.message);
//         return res.status(400).json({ error: messages.join(" ") });
//       }

//       return res.status(500).json({ error: "Server error. Please try again later." });
//     }
//   }
// );

// // ────────────────────────────────────────
// //  GET /api/career  (admin — all applications)
// // ────────────────────────────────────────
// router.get("/", async (req, res) => {
//   try {
//     const {
//       status,
//       position,
//       experience,
//       page = 1,
//       limit = 20,
//       sort = "-createdAt",
//     } = req.query;

//     const filter = {};
//     if (status) filter.status = status;
//     if (position) filter.position = new RegExp(position, "i");
//     if (experience) filter.experience = experience;

//     const skip = (Number(page) - 1) * Number(limit);

//     const [applications, total] = await Promise.all([
//       CareerApplication.find(filter)
//         .sort(sort)
//         .skip(skip)
//         .limit(Number(limit))
//         .lean(),
//       CareerApplication.countDocuments(filter),
//     ]);

//     return res.json({
//       success: true,
//       total,
//       page: Number(page),
//       pages: Math.ceil(total / Number(limit)),
//       data: applications,
//     });
//   } catch (err) {
//     console.error("Career GET error:", err.message);
//     return res.status(500).json({ error: "Server error." });
//   }
// });

// // ────────────────────────────────────────
// //  GET /api/career/:id  (admin)
// // ────────────────────────────────────────
// router.get("/:id", async (req, res) => {
//   try {
//     const application = await CareerApplication.findById(req.params.id).lean();
//     if (!application) return res.status(404).json({ error: "Application not found." });
//     return res.json({ success: true, data: application });
//   } catch (err) {
//     console.error("Career GET/:id error:", err.message);
//     return res.status(500).json({ error: "Server error." });
//   }
// });

// // ────────────────────────────────────────
// //  PATCH /api/career/:id  (admin — update status / notes)
// // ────────────────────────────────────────
// router.patch("/:id", async (req, res) => {
//   try {
//     const validStatuses = [
//       "new", "screening", "shortlisted", "interviewing", "offered", "hired", "rejected",
//     ];
//     if (req.body.status && !validStatuses.includes(req.body.status)) {
//       return res.status(400).json({ error: "Invalid status value." });
//     }

//     const allowed = ["status", "notes"];
//     const updates = {};
//     allowed.forEach((key) => {
//       if (req.body[key] !== undefined) updates[key] = req.body[key];
//     });

//     const application = await CareerApplication.findByIdAndUpdate(
//       req.params.id,
//       updates,
//       { new: true, runValidators: true }
//     );

//     if (!application) return res.status(404).json({ error: "Application not found." });

//     return res.json({ success: true, data: application });
//   } catch (err) {
//     console.error("Career PATCH error:", err.message);
//     return res.status(500).json({ error: "Server error." });
//   }
// });

// // ────────────────────────────────────────
// //  DELETE /api/career/:id  (admin)
// // ────────────────────────────────────────
// router.delete("/:id", async (req, res) => {
//   try {
//     const application = await CareerApplication.findById(req.params.id);
//     if (!application) return res.status(404).json({ error: "Application not found." });

//     // Delete resume file from disk
//     if (application.resumeUrl) {
//       const filePath = path.join(__dirname, "..", application.resumeUrl);
//       fs.unlink(filePath, (err) => {
//         if (err) console.warn("Could not delete resume file:", err.message);
//       });
//     }

//     await application.deleteOne();

//     return res.json({ success: true, message: "Application deleted." });
//   } catch (err) {
//     console.error("Career DELETE error:", err.message);
//     return res.status(500).json({ error: "Server error." });
//   }
// });

// module.exports = router;

const express = require("express");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const CareerApplication = require("../models/Career");
const upload = require("../middleware/upload");
const { validateCareer } = require("../middleware/validate");

// ── Rate limit: max 3 submissions per IP per 24 hours ──
const careerLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 3,
  message: {
    error: "You have submitted too many applications today. Please try again tomorrow.",
  },
});

// Helper: safely delete uploaded file from disk
const cleanupFile = (file) => {
  if (file) fs.unlink(file.path, () => {});
};

// ────────────────────────────────────────
//  POST /api/career
// ────────────────────────────────────────
router.post(
  "/",
  careerLimiter,
  upload.single("resume"),
  validateCareer,
  async (req, res) => {
    try {
      const {
        fullName, email, phone, position, experience,
        currentCompany, portfolio, message,
      } = req.body;

      // ── Duplicate check (application-level) ─────────────────────
      // Escape special regex characters in fullName before using in regex
      const escapedName = fullName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const duplicate = await CareerApplication.findOne({
        position,
        $or: [
          { email },
          { phone },
          { fullName: { $regex: new RegExp(`^${escapedName}$`, "i") } },
        ],
      }).lean();

      if (duplicate) {
        cleanupFile(req.file);
        return res.status(409).json({
          error:
            "An application for this position already exists with your name, email, or phone number.",
        });
      }
      // ────────────────────────────────────────────────────────────

      // Build resume info from multer
      let resumeUrl          = "";
      let resumeOriginalName = "";
      let resumeMimeType     = "";
      let resumeSize         = 0;

      if (req.file) {
        resumeUrl          = `/uploads/resumes/${req.file.filename}`;
        resumeOriginalName = req.file.originalname;
        resumeMimeType     = req.file.mimetype;
        resumeSize         = req.file.size;
      }

      const application = await CareerApplication.create({
        fullName,
        email,
        phone,
        position,
        experience,
        currentCompany,
        portfolio,
        message,
        resumeUrl,
        resumeOriginalName,
        resumeMimeType,
        resumeSize,
        ipAddress: req.ip || "",
      });

      console.log(`🎯 [Career] New application from ${email} for "${position}"`);

      return res.status(201).json({
        success: true,
        message: "Application submitted! We'll review it and get back to you within 5–7 business days.",
        id: application._id,
      });

    } catch (err) {
      cleanupFile(req.file);
      console.error("Career POST error:", err.message);

      // MongoDB unique index violation — race-condition safety net
      if (err.code === 11000) {
        return res.status(409).json({
          error:
            "An application for this position already exists with your email or phone number.",
        });
      }

      if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({ error: messages.join(" ") });
      }

      return res.status(500).json({ error: "Server error. Please try again later." });
    }
  }
);

// ────────────────────────────────────────
//  GET /api/career  (admin — all applications)
// ────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const {
      status,
      position,
      experience,
      page  = 1,
      limit = 20,
      sort  = "-createdAt",
    } = req.query;

    const filter = {};
    if (status)     filter.status     = status;
    if (position)   filter.position   = new RegExp(position, "i");
    if (experience) filter.experience = experience;

    const skip = (Number(page) - 1) * Number(limit);

    const [applications, total] = await Promise.all([
      CareerApplication.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      CareerApplication.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      total,
      page:  Number(page),
      pages: Math.ceil(total / Number(limit)),
      data:  applications,
    });
  } catch (err) {
    console.error("Career GET error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  GET /api/career/:id  (admin)
// ────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const application = await CareerApplication.findById(req.params.id).lean();
    if (!application) return res.status(404).json({ error: "Application not found." });
    return res.json({ success: true, data: application });
  } catch (err) {
    console.error("Career GET/:id error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  PATCH /api/career/:id  (admin — update status / notes)
// ────────────────────────────────────────
router.patch("/:id", async (req, res) => {
  try {
    const validStatuses = [
      "new", "screening", "shortlisted", "interviewing", "offered", "hired", "rejected",
    ];
    if (req.body.status && !validStatuses.includes(req.body.status)) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const allowed = ["status", "notes"];
    const updates = {};
    allowed.forEach((key) => {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    });

    const application = await CareerApplication.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!application) return res.status(404).json({ error: "Application not found." });
    return res.json({ success: true, data: application });

  } catch (err) {
    console.error("Career PATCH error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

// ────────────────────────────────────────
//  DELETE /api/career/:id  (admin)
// ────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const application = await CareerApplication.findById(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found." });

    // Delete resume file from disk
    if (application.resumeUrl) {
      const filePath = path.join(__dirname, "..", application.resumeUrl);
      fs.unlink(filePath, (err) => {
        if (err) console.warn("Could not delete resume file:", err.message);
      });
    }

    await application.deleteOne();
    return res.json({ success: true, message: "Application deleted." });

  } catch (err) {
    console.error("Career DELETE error:", err.message);
    return res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;