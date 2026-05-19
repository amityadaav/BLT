import React, { useState, useEffect, useRef } from "react";
import "./Conversationpopup.css";
import logo from "../../assets/images/BLT.webp";

import {
  FiX,
  FiArrowRight,
  FiArrowLeft,
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiDollarSign,
  FiUsers,
  FiTool,
  FiZap,
  FiMoreHorizontal,  // ← replaces FiSparkles
} from "react-icons/fi";

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const API_URL = `${BASE_URL}/api/contact`;

const ConversationPopup = ({
  isOpen,
  onClose,
  industry = "",
  color = "#6c63ff",
}) => {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const firstInputRef = useRef(null);

  const TOPICS = [
    {
      id: "project",
      label: "Start a New Project",
      icon: <FiZap />, // Using FiZap instead of FiRocket
    },
    {
      id: "quote",
      label: "Get a Quote",
      icon: <FiDollarSign />,
    },
    {
      id: "partner",
      label: "Partnership / Collab",
      icon: <FiUsers />,
    },
    {
      id: "support",
      label: "Technical Support",
      icon: <FiTool />,
    },
    {
      id: "other",
      label: "Something Else",
      icon: <FiMoreHorizontal />
    },
  ];

  useEffect(() => {
    if (isOpen && step === 2 && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }

    if (!isOpen) {
      setStatus({ type: "", msg: "" });
      setStep(1);
      setTopic("");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTopicSelect = (topicLabel) => {
    setTopic(topicLabel);
    setStep(2);
    setStatus({ type: "", msg: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        msg: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        msg: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `Conversation: ${topic}${industry ? ` — ${industry}` : ""}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Message sent successfully! We'll get back to you soon.",
        });
        
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        
        setTimeout(() => {
          onClose();
        }, 2500);
      } else {
        setStatus({
          type: "error",
          msg: data.error || data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        type: "error",
        msg: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
    setStatus({ type: "", msg: "" });
    setTopic("");
  };

  return (
    <div
      className="cv-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cv-popup">
        <button className="cv-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className="cv-header">
          <img src={logo} alt="Company Logo" className="cv-logo" />
          
          <div className="cv-header-text">
            <span className="cv-eyebrow" style={{ color }}>
              {industry ? `${industry} · ` : ""}
              Start a Conversation
            </span>
            <h2>
              {step === 1
                ? "What can we help with?"
                : `Let's talk about ${topic}`}
            </h2>
          </div>
        </div>

        {step === 1 && (
          <div className="cv-topics">
            {TOPICS.map((t) => (
              <button
                key={t.id}
                className="cv-topic-btn"
                onClick={() => handleTopicSelect(t.label)}
                type="button"
              >
                <div className="cv-topic-left">
                  <span className="cv-topic-icon">{t.icon}</span>
                  <span className="cv-topic-label">{t.label}</span>
                </div>
                <FiArrowRight className="cv-topic-arrow" />
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <>
            <button
              className="cv-back"
              onClick={handleBack}
              type="button"
            >
              <FiArrowLeft />
              Back
            </button>

            <form onSubmit={handleSubmit} className="cv-form" noValidate>
              <div className="cv-field">
                <label htmlFor="name"><FiUser />Your Name </label>
                <div className="cv-input-wrap">
                  <input
                    ref={firstInputRef}
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="cv-field">
                <label htmlFor="email"><FiMail />Email Address </label>
                <div className="cv-input-wrap">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="john@company.com"
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="cv-field">
                <label htmlFor="message"><FiMessageSquare />Your Message </label>
                <div className="cv-input-wrap cv-textarea-wrap">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Tell us a bit more about what you need..."
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={4}
                  />
                </div>
              </div>

              {status.msg && (
                <div className={`cv-status cv-status--${status.type}`}>
                  {status.type === "success" ? "✓ " : "⚠ "}
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                className="cv-submit"
                disabled={loading}
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                }}
              >
                {loading ? (
                  <>
                    <span className="cv-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConversationPopup;