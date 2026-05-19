// import React, { useEffect, useState, useRef } from "react";
// import Navbar from "../components/layout/Navbar/Navbar";
// import Footer from "../components/layout/Footer/Footer";
// import "./ContactPage.css";

// const API_URL = import.meta.env.VITE_API_URL
//   ? `${import.meta.env.VITE_API_URL}/api/contact`
//   : "http://localhost:5000/api/contact";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", subject: "", message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({ type: "", msg: "" });
//   const [focused, setFocused] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });

//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePos({
//           x: ((e.clientX - rect.left) / rect.width) * 100,
//           y: ((e.clientY - rect.top) / rect.height) * 100,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

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
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setStatus({ type: "success", msg: "Message sent! We'll be in touch within 1–2 business days." });
//         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       } else {
//         setStatus({ type: "error", msg: data.error || "Something went wrong. Please try again." });
//       }
//     } catch {
//       setStatus({ type: "error", msg: "Server error. Please try again later." });
//     }

//     setLoading(false);
//   };

//   const contactItems = [
//     {
//       icon: (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
//           <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
//         </svg>
//       ),
//       label: "Office",
//       value: "Bengaluru, Karnataka, India",
//       sub: null,
//       href: null,
//     },
//     {
//       icon: (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
//           <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8"/>
//         </svg>
//       ),
//       label: "Email",
//       value: "hello@skylithtech.com",
//       sub: "Response within 24 hrs",
//       href: "mailto:hello@skylithtech.com",
//     },
//     {
//       icon: (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8"/>
//         </svg>
//       ),
//       label: "Phone",
//       value: "+91 98765 43210",
//       sub: "Mon–Fri, 9 AM – 6 PM IST",
//       href: "tel:+919876543210",
//     },
//   ];

//   const fields = [
//     { id: "cp-name", name: "name", type: "text", label: "Full Name", placeholder: "Your full name", required: true, autoComplete: "name" },
//     { id: "cp-email", name: "email", type: "email", label: "Email Address", placeholder: "you@example.com", required: true, autoComplete: "email" },
//     { id: "cp-phone", name: "phone", type: "tel", label: "Phone", placeholder: "+91 98765 43210", required: false, autoComplete: "tel" },
//     { id: "cp-subject", name: "subject", type: "text", label: "Subject", placeholder: "Project inquiry, partnership…", required: true, autoComplete: "off" },
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="cp" aria-label="Contact SkyLith Technology">

//         {/* ── HERO ── */}
//         <header
//           className="cp__hero"
//           ref={heroRef}
//           style={{ "--mx": `${mousePos.x}%`, "--my": `${mousePos.y}%` }}
//         >
//           <div className="cp__hero-orb cp__hero-orb--1" />
//           <div className="cp__hero-orb cp__hero-orb--2" />
//           <div className="cp__hero-grid" />

//           <div className="cp__hero-inner">
//             <div className="cp__eyebrow">
//               <span className="cp__eyebrow-dot" />
//               Get In Touch
//             </div>

//             <h1 className="cp__headline">
//               Let's Build Something<br />
//               <em className="cp__headline-em">Remarkable</em>
//             </h1>

//             <p className="cp__hero-body">
//               Have a project idea? We'd love to discuss how SkyLith Technology
//               can help you design, build, and launch with confidence.
//             </p>

//             <div className="cp__stats">
//               {[["50+", "Projects Delivered"], ["24/7", "Support"], ["100%", "Satisfaction"]].map(([val, lbl]) => (
//                 <div className="cp__stat" key={lbl}>
//                   <span className="cp__stat-val">{val}</span>
//                   <span className="cp__stat-lbl">{lbl}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="cp__hero-scroll-hint">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//               <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//             Scroll to explore
//           </div>
//         </header>

//         {/* ── BODY ── */}
//         <div className="cp__body">

//           {/* ── SIDEBAR ── */}
//           <aside className="cp__sidebar">

//             <div className="cp__card cp__card--contact">
//               <p className="cp__card-overline">Contact Information</p>
//               <h2 className="cp__card-title">Reach Out Anytime</h2>

//               <ul className="cp__contact-list">
//                 {contactItems.map((item) => (
//                   <li className="cp__contact-item" key={item.label}>
//                     <div className="cp__contact-icon">{item.icon}</div>
//                     <div>
//                       <span className="cp__contact-label">{item.label}</span>
//                       {item.href ? (
//                         <a href={item.href} className="cp__contact-value cp__contact-value--link">
//                           {item.value}
//                         </a>
//                       ) : (
//                         <span className="cp__contact-value">{item.value}</span>
//                       )}
//                       {item.sub && <span className="cp__contact-sub">{item.sub}</span>}
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="cp__divider" />

//               <p className="cp__social-label">Follow us</p>
//               <div className="cp__social">
//                 {[
//                   { href: "https://linkedin.com", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" },
//                   { href: "https://twitter.com", label: "X / Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
//                   { href: "https://github.com", label: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" },
//                 ].map(({ href, label, path }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="cp__social-link"
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                       <path d={path} />
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="cp__card cp__card--map" role="button" tabIndex={0} aria-label="Open in Google Maps">
//               <div className="cp__map-grid">
//                 {Array.from({ length: 30 }).map((_, i) => (
//                   <div key={i} className="cp__map-dot" />
//                 ))}
//               </div>
//               <div className="cp__map-pin">
//                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
//                   <circle cx="12" cy="9" r="2.5" fill="white"/>
//                 </svg>
//               </div>
//               <p className="cp__map-label">
//                 Bengaluru, India
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{marginLeft: 6, display: 'inline'}}>
//                   <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </p>
//             </div>

//           </aside>

//           {/* ── FORM ── */}
//           <section className="cp__form-wrap" aria-label="Contact form">

//             <div className="cp__form-header">
//               <p className="cp__form-overline">Send a Message</p>
//               <h3 className="cp__form-title">Tell Us AboutYour Project</h3>
//               <p className="cp__form-desc">We'll get back to you as soon as possible.</p>
//             </div>

//             <form className="cp__form" onSubmit={handleSubmit} noValidate>
//               <div className="cp__form-grid">
//                 {fields.map((f) => (
//                   <div
//                     className={`cp__field${focused === f.name ? " cp__field--focused" : ""}${formData[f.name] ? " cp__field--filled" : ""}`}
//                     key={f.id}
//                   >
//                     <label htmlFor={f.id}>
//                       {f.label}{f.required && <span className="cp__required">*</span>}
//                     </label>
//                     <input
//                       id={f.id}
//                       name={f.name}
//                       type={f.type}
//                       value={formData[f.name]}
//                       onChange={handleChange}
//                       placeholder={f.placeholder}
//                       required={f.required}
//                       autoComplete={f.autoComplete}
//                       onFocus={() => setFocused(f.name)}
//                       onBlur={() => setFocused(null)}
//                     />
//                     <div className="cp__field-line" />
//                   </div>
//                 ))}
//               </div>

//               <div className={`cp__field cp__field--full${focused === "message" ? " cp__field--focused" : ""}${formData.message ? " cp__field--filled" : ""}`}>
//                 <label htmlFor="cp-message">
//                   Message <span className="cp__required">*</span>
//                 </label>
//                 <textarea
//                   id="cp-message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   placeholder="Tell us about your project, goals, and timeline…"
//                   required
//                   onFocus={() => setFocused("message")}
//                   onBlur={() => setFocused(null)}
//                 />
//                 <div className="cp__field-line" />
//               </div>

//               {status.msg && (
//                 <div
//                   className={`cp__status cp__status--${status.type}`}
//                   role="alert"
//                   aria-live="polite"
//                 >
//                   <div className="cp__status-icon">
//                     {status.type === "success" ? (
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                         <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     ) : (
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                         <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                       </svg>
//                     )}
//                   </div>
//                   {status.msg}
//                 </div>
//               )}

//               <div className="cp__form-footer">
//                 <p className="cp__privacy-note">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
//                   </svg>
//                   Your data is safe. We never share it.
//                 </p>
//                 <button
//                   type="submit"
//                   className="cp__submit"
//                   disabled={loading}
//                   aria-busy={loading}
//                 >
//                   {loading ? (
//                     <span className="cp__submit-inner">
//                       <svg className="cp__spinner" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                         <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeDasharray="40" strokeDashoffset="15"/>
//                       </svg>
//                       Sending…
//                     </span>
//                   ) : (
//                     <span className="cp__submit-inner">
//                       Send Message
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                         <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </form>

//           </section>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default ContactPage;






import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import "./ContactPage.css";

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/contact`
  : "http://localhost:5000/api/contact";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [loading,  setLoading]  = useState(false);
  const [status,   setStatus]   = useState({ type: "", msg: "" });
  const [focused,  setFocused]  = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width)  * 100,
          y: ((e.clientY - rect.top)  / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          message: formData.message,
          subject: formData.subject || "General Inquiry",  // pass subject to backend
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent! We'll be in touch within 1–2 business days." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Server error. Please try again later." });
    }

    setLoading(false);
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      ),
      label: "Office", value: "Bengaluru, Karnataka, India", sub: null, href: null,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      ),
      label: "Email", value: "hello@skylithtech.com", sub: "Response within 24 hrs", href: "mailto:hello@skylithtech.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      ),
      label: "Phone", value: "+91 98765 43210", sub: "Mon–Fri, 9 AM – 6 PM IST", href: "tel:+919876543210",
    },
  ];

  const fields = [
    { id: "cp-name",    name: "name",    type: "text",  label: "Full Name",      placeholder: "Your full name",             required: true,  autoComplete: "name" },
    { id: "cp-email",   name: "email",   type: "email", label: "Email Address",  placeholder: "you@example.com",            required: true,  autoComplete: "email" },
    { id: "cp-phone",   name: "phone",   type: "tel",   label: "Phone",          placeholder: "+91 98765 43210",            required: false, autoComplete: "tel" },
    { id: "cp-subject", name: "subject", type: "text",  label: "Subject",        placeholder: "Project inquiry, partnership…", required: true, autoComplete: "off" },
  ];

  return (
    <>
      <Navbar />

      <main className="cp" aria-label="Contact SkyLith Technology">

        {/* ── HERO ── */}
        <header
          className="cp__hero"
          ref={heroRef}
          style={{ "--mx": `${mousePos.x}%`, "--my": `${mousePos.y}%` }}
        >
          <div className="cp__hero-orb cp__hero-orb--1" />
          <div className="cp__hero-orb cp__hero-orb--2" />
          <div className="cp__hero-grid" />

          <div className="cp__hero-inner">
            <div className="cp__eyebrow">
              <span className="cp__eyebrow-dot" />
              Get In Touch
            </div>

            <h1 className="cp__headline">
              Let's Build Something<br />
              <em className="cp__headline-em">Remarkable</em>
            </h1>

            <p className="cp__hero-body">
              Have a project idea? We'd love to discuss how SkyLith Technology
              can help you design, build, and launch with confidence.
            </p>

            <div className="cp__stats">
              {[["50+", "Projects Delivered"], ["24/7", "Support"], ["100%", "Satisfaction"]].map(([val, lbl]) => (
                <div className="cp__stat" key={lbl}>
                  <span className="cp__stat-val">{val}</span>
                  <span className="cp__stat-lbl">{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cp__hero-scroll-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Scroll to explore
          </div>
        </header>

        {/* ── BODY ── */}
        <div className="cp__body">

          {/* ── SIDEBAR ── */}
          <aside className="cp__sidebar">
            <div className="cp__card cp__card--contact">
              <p className="cp__card-overline">Contact Information</p>
              <h2 className="cp__card-title">Reach Out Anytime</h2>

              <ul className="cp__contact-list">
                {contactItems.map((item) => (
                  <li className="cp__contact-item" key={item.label}>
                    <div className="cp__contact-icon">{item.icon}</div>
                    <div>
                      <span className="cp__contact-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="cp__contact-value cp__contact-value--link">{item.value}</a>
                      ) : (
                        <span className="cp__contact-value">{item.value}</span>
                      )}
                      {item.sub && <span className="cp__contact-sub">{item.sub}</span>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cp__divider" />

              <p className="cp__social-label">Follow us</p>
              <div className="cp__social">
                {[
                  { href: "https://linkedin.com", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" },
                  { href: "https://twitter.com", label: "X / Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { href: "https://github.com",  label: "GitHub",     path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                ].map(({ href, label, path }) => (
                  <a
                    key={label} href={href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={label} className="cp__social-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="cp__card cp__card--map" role="button" tabIndex={0} aria-label="Open in Google Maps">
              <div className="cp__map-grid">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="cp__map-dot" />
                ))}
              </div>
              <div className="cp__map-pin">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
                  <circle cx="12" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <p className="cp__map-label">
                Bengaluru, India
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 6, display: "inline" }}>
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </p>
            </div>
          </aside>

          {/* ── FORM ── */}
          <section className="cp__form-wrap" aria-label="Contact form">
            <div className="cp__form-header">
              <p className="cp__form-overline">Send a Message</p>
              <h3 className="cp__form-title">Tell Us About Your Project</h3>
              <p className="cp__form-desc">We'll get back to you as soon as possible.</p>
            </div>

            <form className="cp__form" onSubmit={handleSubmit} noValidate>
              <div className="cp__form-grid">
                {fields.map((f) => (
                  <div
                    key={f.id}
                    className={`cp__field${focused === f.name ? " cp__field--focused" : ""}${formData[f.name] ? " cp__field--filled" : ""}`}
                  >
                    <label htmlFor={f.id}>
                      {f.label}{f.required && <span className="cp__required">*</span>}
                    </label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type}
                      value={formData[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required={f.required}
                      autoComplete={f.autoComplete}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused(null)}
                      disabled={loading}
                    />
                    <div className="cp__field-line" />
                  </div>
                ))}
              </div>

              <div className={`cp__field cp__field--full${focused === "message" ? " cp__field--focused" : ""}${formData.message ? " cp__field--filled" : ""}`}>
                <label htmlFor="cp-message">
                  Message <span className="cp__required">*</span>
                </label>
                <textarea
                  id="cp-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline…"
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  disabled={loading}
                />
                <div className="cp__field-line" />
              </div>

              {/* ── STATUS ── */}
              {status.msg && (
                <div
                  className={`cp__status cp__status--${status.type}`}
                  role="alert"
                  aria-live="polite"
                >
                  <div className="cp__status-icon">
                    {status.type === "success" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  {status.msg}
                </div>
              )}

              <div className="cp__form-footer">
                <p className="cp__privacy-note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Your data is safe. We never share it.
                </p>
                <button
                  type="submit"
                  className="cp__submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <span className="cp__submit-inner">
                      <svg className="cp__spinner" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeDasharray="40" strokeDashoffset="15"/>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="cp__submit-inner">
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
