const mongoose = require("mongoose");

/**
 * Career Application Schema
 * Handles submissions from Career.jsx application form
 */
const careerSchema = new mongoose.Schema(
  {
    // ── Personal Info ──
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },

    // ── Professional Info ──
    position: {
      type: String,
      required: [true, "Position is required."],
      trim: true,
    },
    experience: {
      type: String,
      required: [true, "Experience range is required."],
      enum: ["0-1", "1-3", "3-5", "5-8", "8+"],
    },
    currentCompany: {
      type: String,
      trim: true,
      default: "",
    },
    portfolio: {
      type: String,
      trim: true,
      default: "",
    },

    // ── Cover Letter ──
    message: {
      type: String,
      trim: true,
      default: "",
      maxlength: [5000, "Cover letter cannot exceed 5000 characters."],
    },

    // ── Resume / CV ──
    resumeUrl: {
      type: String,
      default: "",   // stored path after multer upload
    },
    resumeOriginalName: {
      type: String,
      default: "",
    },
    resumeMimeType: {
      type: String,
      default: "",
    },
    resumeSize: {
      type: Number,
      default: 0,
    },

    // ── Admin Tracking ──
    status: {
      type: String,
      enum: [
        "new",
        "screening",
        "shortlisted",
        "interviewing",
        "offered",
        "hired",
        "rejected",
      ],
      default: "new",
    },
    notes: {
      type: String,
      default: "",
    },
    ipAddress: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

careerSchema.index({ status: 1, createdAt: -1 });
careerSchema.index({ email: 1 });
careerSchema.index({ position: 1 });

module.exports = mongoose.model("CareerApplication", careerSchema);
