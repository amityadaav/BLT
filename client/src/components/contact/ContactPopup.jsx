
// import React, { useState, useEffect, useRef } from "react";
// import "./ContactPopup.css";
// import logo from "../../assets/images/BLT.webp";

// const API_URL = import.meta.env.VITE_API_URL
//   ? `${import.meta.env.VITE_API_URL}/api/contact`
//   : "http://localhost:5000/api/contact";

// /**
//  * CONTACT POPUP
//  * Props:
//  *   isOpen  {boolean}  – controls visibility
//  *   onClose {function} – called when user closes the modal
//  */
// const ContactPopup = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus]   = useState({ type: "", msg: "" });
//   const firstInputRef = useRef(null);

//   /* ── Focus first field when opened ── */
//   useEffect(() => {
//     if (isOpen && firstInputRef.current) {
//       setTimeout(() => firstInputRef.current?.focus(), 100);
//     }
//     if (!isOpen) {
//       setStatus({ type: "", msg: "" });
//     }
//   }, [isOpen]);

//   /* ── Close on Escape ── */
//   useEffect(() => {
//     if (!isOpen) return;
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [isOpen, onClose]);

//   /* ── Lock body scroll ── */
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: "", msg: "" });

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus({ type: "success", msg: "Thank you! We'll get back to you soon. 🎉" });
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setTimeout(onClose, 2000);
//       } else {
//         setStatus({ type: "error", msg: data.error || "Something went wrong. Please try again." });
//       }
//     } catch {
//       setStatus({ type: "error", msg: "Server error. Please try again later." });
//     }

//     setLoading(false);
//   };

//   return (
//     <div
//       className="popup-overlay"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="popup-title"
//       onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
//     >
//       <div className="popup">
//         {/* ── HEADER ── */}
//         <div className="popup__header">
//           {/* Replace img with your real logo */}
//           <img src={logo} alt="SkyLith Technology" className="popup__logo" /> 
//           <h2 id="popup-title">Let's Talk</h2>
//         </div>

//         {/* ── FORM ── */}
//         <form onSubmit={handleSubmit} noValidate>
//           <input
//             ref={firstInputRef}
//             name="name"
//             type="text"
//             value={formData.name}
//             placeholder="Your Name *"
//             onChange={handleChange}
//             required
//             autoComplete="name"
//             aria-label="Your Name"
//           />
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             placeholder="Your Email *"
//             onChange={handleChange}
//             required
//             autoComplete="email"
//             aria-label="Your Email"
//           />
//           <input
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             placeholder="Phone (optional)"
//             onChange={handleChange}
//             autoComplete="tel"
//             aria-label="Phone number"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             placeholder="Your Message *"
//             onChange={handleChange}
//             required
//             aria-label="Your message"
//           />

//           {/* Status message */}
//           {status.msg && (
//             <p
//               className={`popup__msg popup__msg--${status.type}`}
//               role="alert"
//               aria-live="polite"
//             >
//               {status.msg}
//             </p>
//           )}

//           <button type="submit" disabled={loading} aria-busy={loading}>
//             {loading ? "Sending…" : "Send Message"}
//           </button>
//         </form>

//         {/* ── CLOSE ── */}
//         <button
//           className="close-btn"
//           onClick={onClose}
//           aria-label="Close contact form"
//           type="button"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactPopup;

import React, { useState, useEffect, useRef } from "react";
import "./ContactPopup.css";
import logo from "../../assets/images/BLT.webp";

/* ─────────────────────────────────────────────
   API URL
───────────────────────────────────────────── */
const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const API_URL = `${BASE_URL}/api/contact`;

/* ─────────────────────────────────────────────
   CONTACT POPUP COMPONENT
───────────────────────────────────────────── */
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const firstInputRef = useRef(null);

  /* ─────────────────────────────────────────────
     Focus First Input
  ───────────────────────────────────────────── */
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }

    if (!isOpen) {
      setStatus({
        type: "",
        msg: "",
      });
    }
  }, [isOpen]);

  /* ─────────────────────────────────────────────
     ESC Key Close
  ───────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  /* ─────────────────────────────────────────────
     Lock Body Scroll
  ───────────────────────────────────────────── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ─────────────────────────────────────────────
     Prevent Rendering
  ───────────────────────────────────────────── */
  if (!isOpen) return null;

  /* ─────────────────────────────────────────────
     Handle Input Change
  ───────────────────────────────────────────── */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ─────────────────────────────────────────────
     Handle Submit
  ───────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      msg: "",
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Thank you! We'll get back to you soon. 🎉",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus({
          type: "error",
          msg:
            data?.error ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);

      setStatus({
        type: "error",
        msg: "Server error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ─────────────────────────────────────────────
     JSX
  ───────────────────────────────────────────── */
  return (
    <div
      className="popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="popup">
        {/* HEADER */}
        <div className="popup__header">
          <img
            src={logo}
            alt="BlueLith Technology"
            className="popup__logo"
          />

          <h2 id="popup-title">Let's Talk</h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate>
          {/* NAME */}
          <input
            ref={firstInputRef}
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            aria-label="Your Name"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            aria-label="Your Email"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            aria-label="Phone Number"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
          />

          {/* STATUS */}
          {status.msg && (
            <p
              className={`popup__msg popup__msg--${status.type}`}
              role="alert"
              aria-live="polite"
            >
              {status.msg}
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          type="button"
          aria-label="Close Contact Form"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;