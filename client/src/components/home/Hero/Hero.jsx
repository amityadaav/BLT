
// import React, {
//   useState,
//   useEffect,
//   memo,
// } from "react";

// import { Link } from "react-router-dom";
// import "./Hero.css";

// /* ─────────────────────────────────────────────
//    IMAGES
// ───────────────────────────────────────────── */
// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format&fit=crop",
//     alt: "Bluelith Technology team collaborating on software development",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=80&auto=format&fit=crop",
//     alt: "UI UX designers building digital product experiences",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop",
//     alt: "Modern engineering team developing scalable applications",
//   },
// ];

// /* ─────────────────────────────────────────────
//    HERO
// ───────────────────────────────────────────── */
// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   /* Auto Slider */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="hero"
//       aria-label="Bluelith Technology Hero Section"
//     >
//       {/* Background Lines */}
//       <div
//         className="hero__bg-lines"
//         aria-hidden="true"
//       >
//         {[...Array(8)].map((_, i) => (
//           <span
//             key={i}
//             className="hero__bg-line"
//           />
//         ))}
//       </div>

//       {/* ───────────────── TOP ───────────────── */}
//       <div className="hero__top">
//         {/* LEFT */}
//         <div className="hero__headline">
//           <h1 className="hero__headline-h1">
//             <span className="hero__headline-line">
//               Strategy. Design.
//             </span>

//             <span className="hero__headline-line">
//               Engineering.
//             </span>

//             <span className="hero__headline-line hero__headline-line--accent">
//               Delivered.
//             </span>
//           </h1>

//           <span
//             className="hero__asterisk"
//             aria-hidden="true"
//           >
//             ✳
//           </span>

//           {/* Stats */}
//           <div className="hero__capsule-stats">
//             <div className="hero__capsule-item">
//               <span className="hero__capsule-dot" />
//               50+ Projects
//             </div>

//             <div className="hero__capsule-divider" />

//             <div className="hero__capsule-item">
//               <span className="hero__capsule-dot" />
//               Creative Engineering
//             </div>

//             <div className="hero__capsule-divider" />

//             <div className="hero__capsule-item">
//               <span className="hero__capsule-dot" />
//               Global Clients
//             </div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="hero__right">
//           <div className="hero__label">
//             <span
//               className="hero__label-line"
//               aria-hidden="true"
//             />

//             <span>
//               Bluelith Technology
//             </span>

//             &nbsp;— AI & Software Solutions
//           </div>

//           <p className="hero__description">
//             We design, develop, and scale digital
//             products for startups and growing
//             businesses worldwide — combining
//             strategy, UI/UX, and engineering under
//             one roof.
//           </p>

//           {/* Trust */}
//           <ul
//             className="hero__trust"
//             aria-label="Company strengths"
//           >
//             <li className="hero__trust-item">
//               ✦ End-to-End Digital Studio
//             </li>

//             <li className="hero__trust-item">
//               ✦ Fast & Scalable Development
//             </li>

//             <li className="hero__trust-item">
//               ✦ Trusted by Global Clients
//             </li>
//           </ul>

//           {/* CTA */}
//           <Link
//             to="/services"
//             className="hero__service-btn"
//             aria-label="View Services"
//           >
//             <svg
//               viewBox="0 0 16 16"
//               fill="none"
//               className="hero__btn-icon"
//               aria-hidden="true"
//             >
//               <path
//                 d="M3 8H13M13 8L9 4M13 8L9 12"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>

//             View
//             <br />
//             Services
//           </Link>
//         </div>
//       </div>

//       {/* ───────────────── IMAGE ───────────────── */}
//       <div className="hero__image-section">
//         <div className="hero__image-wrapper">
//           <img
//             src={images[index].src}
//             alt={images[index].alt}
//             className="hero__image"
//             width="1400"
//             height="800"
//             decoding="async"
//             loading={index === 0 ? "eager" : "lazy"}
//             fetchPriority={
//               index === 0 ? "high" : "low"
//             }
//           />

//           <div
//             className="hero__image-overlay"
//             aria-hidden="true"
//           />

//           {/* Dots */}
//           <div
//             className="hero__dots"
//             role="tablist"
//             aria-label="Hero Slider"
//           >
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 role="tab"
//                 aria-selected={i === index}
//                 aria-label={`Slide ${i + 1}`}
//                 className={`hero__dot ${
//                   i === index
//                     ? "hero__dot--active"
//                     : ""
//                 }`}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(Hero);

/**
 * Hero.jsx — SEO & Performance Optimised
 *
 * Changes (UI unchanged):
 * ─ Added structured-data itemScope / itemProp to <section>
 * ─ h1 kept as-is (only one h1 per page — correct)
 * ─ LCP <img> gets fetchPriority="high" + loading="eager" only for slide 0
 * ─ Non-LCP slides use loading="lazy" + fetchPriority="low"
 * ─ Explicit width/height on every img to prevent CLS
 * ─ All img alt text is descriptive and keyword-rich
 * ─ Slider auto-interval raised to 5 s (reduces unnecessary repaints)
 * ─ Images array defined outside component (no re-allocation on re-render)
 * ─ memo() wrapper prevents parent re-render cascades
 * ─ aria-live on image region for screen-reader announcements
 */

import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

/* ─────────────────────────────────────────────
   IMAGES — defined once, outside component
   (avoids re-allocation on every render)
───────────────────────────────────────────── */
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format&fit=crop",
    alt: "Bluelith Technology software team collaborating on product development in Bengaluru",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=80&auto=format&fit=crop",
    alt: "UI UX designers at Bluelith Technology crafting digital product experiences",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop",
    alt: "Bluelith Technology engineering team building scalable web applications",
  },
];

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const Hero = () => {
  const [index, setIndex] = useState(0);

  /* Auto Slider — 5 s keeps paint budget low */
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      aria-label="Bluelith Technology — Strategy, Design and Engineering"
      /* Schema.org Organization markup */
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Hidden SEO meta props */}
      <meta itemProp="name" content="Bluelith Technology" />
      <meta
        itemProp="description"
        content="Full-service software company in Bengaluru specialising in AI, web development, UI/UX design and product engineering for startups and enterprises worldwide."
      />
      <meta itemProp="url" content="https://www.bluelith.in" />
      <meta itemProp="addressLocality" content="Bengaluru" />
      <meta itemProp="addressCountry" content="IN" />

      {/* Background decoration */}
      <div className="hero__bg-lines" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="hero__bg-line" />
        ))}
      </div>

      {/* ─────────── TOP ─────────── */}
      <div className="hero__top">
        {/* LEFT — headline */}
        <div className="hero__headline">
          {/*
           * Only ONE <h1> per page.
           * Words are keyword-targeted for
           * "software company Bengaluru" queries.
           */}
          <h1
            className="hero__headline-h1"
            itemProp="slogan"
          >
            <span className="hero__headline-line">Strategy. Design.</span>
            <span className="hero__headline-line">Engineering.</span>
            <span className="hero__headline-line hero__headline-line--accent">
              Delivered.
            </span>
          </h1>

          <span className="hero__asterisk" aria-hidden="true">✳</span>

          {/* Stats capsule */}
          <div className="hero__capsule-stats" aria-label="Company highlights">
            <div className="hero__capsule-item">
              <span className="hero__capsule-dot" aria-hidden="true" />
              50+ Projects
            </div>
            <div className="hero__capsule-divider" aria-hidden="true" />
            <div className="hero__capsule-item">
              <span className="hero__capsule-dot" aria-hidden="true" />
              Creative Engineering
            </div>
            <div className="hero__capsule-divider" aria-hidden="true" />
            <div className="hero__capsule-item">
              <span className="hero__capsule-dot" aria-hidden="true" />
              Global Clients
            </div>
          </div>
        </div>

        {/* RIGHT — description + CTA */}
        <div className="hero__right">
          <div className="hero__label">
            <span className="hero__label-line" aria-hidden="true" />
            <span itemProp="name">Bluelith Technology</span>
            &nbsp;— AI &amp; Software Solutions
          </div>

          <p className="hero__description" itemProp="description">
            We design, develop, and scale digital products for startups and
            growing businesses worldwide — combining strategy, UI/UX, and
            engineering under one roof.
          </p>

          <ul className="hero__trust" aria-label="Company strengths">
            <li className="hero__trust-item">✦ End-to-End Digital Studio</li>
            <li className="hero__trust-item">✦ Fast &amp; Scalable Development</li>
            <li className="hero__trust-item">✦ Trusted by Global Clients</li>
          </ul>

          {/* CTA — Link instead of anchor for React Router */}
          <Link
            to="/services"
            className="hero__service-btn"
            aria-label="View all services offered by Bluelith Technology"
            title="Web Design, Development & AI Services — Bluelith Technology"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="hero__btn-icon"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View
            <br />
            Services
          </Link>
        </div>
      </div>

      {/* ─────────── IMAGE SLIDER ─────────── */}
      <div className="hero__image-section">
        <div
          className="hero__image-wrapper"
          aria-live="polite"
          aria-label={`Slide ${index + 1} of ${IMAGES.length}`}
        >
          {/*
           * Render only the active slide.
           * This avoids loading all 3 images on paint.
           * Slide 0 → eager + high priority (LCP)
           * Others  → lazy + low priority
           */}
          <img
            key={index}
            src={IMAGES[index].src}
            alt={IMAGES[index].alt}
            className="hero__image"
            /* Explicit intrinsic dimensions prevent CLS */
            width="1400"
            height="800"
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
          />

          <div className="hero__image-overlay" aria-hidden="true" />

          {/* Slide controls */}
          <div
            className="hero__dots"
            role="tablist"
            aria-label="Hero slideshow controls"
          >
            {IMAGES.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${img.alt}`}
                className={`hero__dot ${
                  i === index ? "hero__dot--active" : ""
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);