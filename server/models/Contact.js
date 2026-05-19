const mongoose = require("mongoose");

/**
 * Contact Schema
 * Handles submissions from:
 *  - ContactPopup       (simple contact form)
 *  - ConsultationPopup  (free consultation request)
 *  - ConversationPopup  (topic-based conversation form)
 */
const contactSchema = new mongoose.Schema(
  {
    // ── Common Fields ──
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
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters."],
    },

    // ── Consultation / Conversation Specific ──
    company: {
      type: String,
      trim: true,
      default: "",
    },
    industry: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "General Inquiry",
    },

    // ── Metadata ──
    source: {
      type: String,
      enum: ["contact", "consultation", "conversation"],
      default: "contact",
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new",
    },
    ipAddress: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

// Index for querying by status and date
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });

module.exports = mongoose.model("Contact", contactSchema);
