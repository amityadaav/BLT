const mongoose = require("mongoose");

/**
 * Project Schema
 * Handles submissions from StartProjectPopup
 */
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
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
    company: {
      type: String,
      trim: true,
      default: "",
    },
    budget: {
      type: String,
      enum: ["5k-10k", "10k-25k", "25k-50k", "50k+", ""],
      default: "",
    },
    projectType: {
      type: String,
      enum: ["website", "mobile-app", "uiux", "branding", "custom", ""],
      default: "",
    },
    message: {
      type: String,
      required: [true, "Project description is required."],
      trim: true,
      maxlength: [3000, "Message cannot exceed 3000 characters."],
    },

    // ── Admin Tracking ──
    status: {
      type: String,
      enum: ["new", "reviewed", "in-discussion", "quoted", "won", "lost"],
      default: "new",
    },
    assignedTo: {
      type: String,
      default: "",
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

projectSchema.index({ status: 1, createdAt: -1 });
projectSchema.index({ email: 1 });

module.exports = mongoose.model("Project", projectSchema);
