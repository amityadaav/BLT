import React, { useState, useEffect, useRef } from "react";
import "./StartProjectPopup.css";
import logo from "../../assets/images/BLT.webp";

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/project`
  : "http://localhost:5000/api/project";

/**
 * START PROJECT POPUP
 * Props:
 *   isOpen  {boolean}
 *   onClose {function}
 */
const StartProjectPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const firstInputRef = useRef(null);

  /* ── Focus First Input ── */
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }

    if (!isOpen) {
      setStatus({ type: "", msg: "" });
    }
  }, [isOpen]);

  /* ── Close on Escape ── */
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  /* ── Lock Body Scroll ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          msg: "Project request submitted successfully 🚀",
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          projectType: "",
          message: "",
        });

        setTimeout(onClose, 2000);
      } else {
        setStatus({
          type: "error",
          msg: data.error || "Something went wrong.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        msg: "Server error. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <div
      className="project-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-popup">
        {/* HEADER */}
        <div className="project-popup__header">
          <img
            src={logo}
            alt="BlueLith Technology"
            className="project-popup__logo"
          />

          <div>
            <h2 id="project-popup-title">Start a Project</h2>
            <p>Tell us about your idea & goals.</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate>
          <input
            ref={firstInputRef}
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="project-popup__grid">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select Budget</option>
              <option value="5k-10k">$5k - $10k</option>
              <option value="10k-25k">$10k - $25k</option>
              <option value="25k-50k">$25k - $50k</option>
              <option value="50k+">$50k+</option>
            </select>

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Project Type</option>
              <option value="website">Website</option>
              <option value="mobile-app">Mobile App</option>
              <option value="uiux">UI/UX Design</option>
              <option value="branding">Branding</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project *"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* STATUS */}
          {status.msg && (
            <p
              className={`project-popup__msg project-popup__msg--${status.type}`}
            >
              {status.msg}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Start Project"}
          </button>
        </form>

        {/* CLOSE */}
        <button
          className="project-popup__close"
          onClick={onClose}
          type="button"
          aria-label="Close Popup"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default StartProjectPopup;