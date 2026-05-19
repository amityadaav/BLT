import React, { useState, useEffect, useRef } from "react";
import "./Consultationpopup.css";
import logo from "../../assets/images/BLT.webp";

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const API_URL = `${BASE_URL}/api/contact`;

/**
 * CONSULTATION POPUP
 * Props:
 *   isOpen     {boolean}  – controls visibility
 *   onClose    {function} – called when user closes the modal
 *   industry   {string}   – optional, pre-fills industry context (e.g. "FinTech")
 */
const ConsultationPopup = ({ isOpen, onClose, industry = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: industry,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const firstInputRef = useRef(null);

  const INDUSTRIES = [
    "FinTech", "HealthTech", "EdTech", "RetailTech",
    "LogiTech", "PropTech", "Industry 4.0", "GovTech", "Other",
  ];

  /* Focus first field when opened */
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
    if (!isOpen) setStatus({ type: "", msg: "" });
  }, [isOpen]);

  /* Sync industry prop */
  useEffect(() => {
    if (industry) setFormData((prev) => ({ ...prev, industry }));
  }, [industry]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Free Consultation Request — ${formData.industry || "General"}`,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: "Consultation request sent! We'll reach out within 24 hours. 🚀" });
        setFormData({ name: "", email: "", phone: "", company: "", industry, message: "" });
        setTimeout(onClose, 2500);
      } else {
        setStatus({ type: "error", msg: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Server error. Please try again later." });
    }

    setLoading(false);
  };

  return (
    <div
      className="cp-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cp-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="cp-popup">

        {/* ── CLOSE ── */}
        <button className="cp-close" onClick={onClose} aria-label="Close" type="button">✕</button>

        {/* ── HEADER ── */}
        <div className="cp-header">
          <img src={logo} alt="SkyLith Technology" className="cp-logo" />
          <div className="cp-header-text">
            <span className="cp-eyebrow">Free Consultation</span>
            <h2 id="cp-title">Let's Build Together</h2>
            <p className="cp-subtitle">Tell us about your project — we'll respond within 24 hours.</p>
          </div>
        </div>

        {/* ── BADGES ── */}
        <div className="cp-badges">
          <span className="cp-badge">✓ No Commitment</span>
          <span className="cp-badge">✓ Expert Advice</span>
          <span className="cp-badge">✓ 24hr Response</span>
        </div>

        {/* ── FORM ── */}
        <form onSubmit={handleSubmit} noValidate className="cp-form">
          <div className="cp-row">
            <div className="cp-field">
              <label htmlFor="cp-name">Full Name *</label>
              <input
                id="cp-name"
                ref={firstInputRef}
                name="name"
                type="text"
                value={formData.name}
                placeholder="John Doe"
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="cp-field">
              <label htmlFor="cp-email">Work Email *</label>
              <input
                id="cp-email"
                name="email"
                type="email"
                value={formData.email}
                placeholder="john@company.com"
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="cp-row">
            <div className="cp-field">
              <label htmlFor="cp-phone">Phone</label>
              <input
                id="cp-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                placeholder="+91 98765 43210"
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="cp-field">
              <label htmlFor="cp-company">Company</label>
              <input
                id="cp-company"
                name="company"
                type="text"
                value={formData.company}
                placeholder="Your Company"
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="cp-field">
            <label htmlFor="cp-industry">Industry</label>
            <select
              id="cp-industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Select your industry…</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          <div className="cp-field">
            <label htmlFor="cp-message">How can we help? *</label>
            <textarea
              id="cp-message"
              name="message"
              value={formData.message}
              placeholder="Briefly describe your project or challenge…"
              onChange={handleChange}
              required
            />
          </div>

          {status.msg && (
            <p className={`cp-status cp-status--${status.type}`} role="alert" aria-live="polite">
              {status.msg}
            </p>
          )}

          <button type="submit" className="cp-submit" disabled={loading} aria-busy={loading}>
            {loading ? (
              <span className="cp-spinner" aria-hidden="true" />
            ) : (
              <>
                Get Free Consultation
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;