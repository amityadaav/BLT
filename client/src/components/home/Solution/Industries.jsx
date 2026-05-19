// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Industries.css";

// /* ── SVG Icons ── */
// const FinanceIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <rect x="8" y="28" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="18" y="20" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="28" y="14" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="38" y="8"  width="6" height="32" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M6 42h38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// const HealthIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M24 40C24 40 8 30 8 18a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <path d="M20 18h8M24 14v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// const EduIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M24 10L6 20l18 10 18-10-18-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <path d="M14 25v10c0 3 4.5 6 10 6s10-3 10-6V25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//     <path d="M40 20v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// const RetailIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M8 12h32l-4 20H12L8 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <path d="M8 12L6 6H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//     <circle cx="16" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
//     <circle cx="32" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M20 22l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const LogisticsIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <rect x="4" y="18" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M32 24h6l6 8v4h-12V24Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <circle cx="12" cy="38" r="3" stroke="currentColor" strokeWidth="1.6"/>
//     <circle cx="36" cy="38" r="3" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M8 18V10h20v8" stroke="currentColor" strokeWidth="1.6"/>
//   </svg>
// );

// const RealEstateIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M6 22L24 8l18 14v20H6V22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <path d="M18 42V30h12v12" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M20 18h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// const ManufIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M6 36L14 18l8 10 8-16 12 24H6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M36 9V6M36 22v-3M41 14h3M28 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// const GovtIcon = () => (
//   <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//     <path d="M24 6l20 10H4L24 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
//     <rect x="8"  y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="17" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="26" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <rect x="35" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M4 38h40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// /* ── Industry data ── */
// const INDUSTRIES = [
//   {
//     id: "finance",
//     label: "FinTech",
//     title: "Finance & Banking",
//     desc: "AI-driven analytics, fraud detection, and seamless digital banking experiences that keep customers ahead of the curve.",
//     tags: ["Risk Analytics", "Payment Systems", "RegTech", "Open Banking"],
//     stat: "3x faster",
//     statLabel: "Transaction processing",
//     icon: <FinanceIcon />,
//     color: "#6c63ff",
//   },
//   {
//     id: "health",
//     label: "HealthTech",
//     title: "Healthcare & Life Sciences",
//     desc: "Digital health platforms, patient management systems, and data pipelines that improve outcomes and reduce operational load.",
//     tags: ["Telemedicine", "EHR Systems", "AI Diagnostics", "Compliance"],
//     stat: "40% cut",
//     statLabel: "In admin overhead",
//     icon: <HealthIcon />,
//     color: "#22c55e",
//   },
//   {
//     id: "edu",
//     label: "EdTech",
//     title: "Education & E-Learning",
//     desc: "Adaptive learning platforms and LMS solutions that personalize education for millions of learners worldwide.",
//     tags: ["LMS Platforms", "Adaptive Learning", "Live Classrooms", "Analytics"],
//     stat: "2.4x",
//     statLabel: "Learner engagement",
//     icon: <EduIcon />,
//     color: "#f59e0b",
//   },
//   {
//     id: "retail",
//     label: "RetailTech",
//     title: "Retail & E-Commerce",
//     desc: "End-to-end commerce solutions — from storefront to fulfilment — powered by personalization engines and real-time data.",
//     tags: ["D2C Platforms", "Personalization", "Inventory AI", "Omnichannel"],
//     stat: "58% lift",
//     statLabel: "In conversion rate",
//     icon: <RetailIcon />,
//     color: "#ec4899",
//   },
//   {
//     id: "logistics",
//     label: "LogiTech",
//     title: "Logistics & Supply Chain",
//     desc: "Smart route optimization, real-time tracking, and warehouse automation that cut costs and keep deliveries on time.",
//     tags: ["Route AI", "Fleet Tracking", "WMS", "Last-Mile Tech"],
//     stat: "30% lower",
//     statLabel: "Logistics cost",
//     icon: <LogisticsIcon />,
//     color: "#0ea5e9",
//   },
//   {
//     id: "realestate",
//     label: "PropTech",
//     title: "Real Estate & PropTech",
//     desc: "Property platforms with virtual tours, smart search, and valuation models that modernize how people find their next home.",
//     tags: ["Virtual Tours", "Smart Search", "CRM", "Valuation AI"],
//     stat: "5x faster",
//     statLabel: "Property discovery",
//     icon: <RealEstateIcon />,
//     color: "#8b5cf6",
//   },
//   {
//     id: "manufacturing",
//     label: "Industry 4.0",
//     title: "Manufacturing & IoT",
//     desc: "Connected factories powered by predictive maintenance, IoT dashboards, and process automation that scale production efficiently.",
//     tags: ["IoT Dashboards", "Predictive Maint.", "Digital Twins", "ERP"],
//     stat: "22% reduction",
//     statLabel: "In downtime",
//     icon: <ManufIcon />,
//     color: "#f97316",
//   },
//   {
//     id: "govt",
//     label: "GovTech",
//     title: "Government & Public Sector",
//     desc: "Secure, accessible digital services that modernize citizen engagement, streamline workflows, and bring transparency to governance.",
//     tags: ["e-Governance", "Citizen Portals", "Data Security", "Compliance"],
//     stat: "80% digital",
//     statLabel: "Service adoption",
//     icon: <GovtIcon />,
//     color: "#14b8a6",
//   },
// ];

// /* ── Component ── */
// const Industries = () => {
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [inView, setInView] = useState(false);
//   const [activeId, setActiveId] = useState("finance");
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const navigate = useNavigate();

//   /* Intersection observer — trigger entrance animation once */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold: 0.12 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   /* Handle horizontal scroll buttons */
//   const updateScrollButtons = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setCanScrollLeft(scrollLeft > 10);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButtons);
//       updateScrollButtons();
//       return () => container.removeEventListener("scroll", updateScrollButtons);
//     }
//   }, [inView]);

//   const scrollHorizontal = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       scrollContainerRef.current.scrollTo({
//         left: scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
//         behavior: "smooth",
//       });
//     }
//   };

//   /* ── FIX: handleExploreSolution always calls navigate with the given id ── */
//   const handleExploreSolution = (industryId) => {
//     const targetId = industryId || activeId;
//     navigate(`/industries/${targetId}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section
//       id="industries"
//       className={`ind ${inView ? "ind--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="ind-heading"
//       itemScope
//       itemType="https://schema.org/ItemList"
//     >
//       <meta itemProp="name" content="Industries We Serve — SkyLith Technology" />

//       {/* decorative orbs */}
//       <span className="ind__orb ind__orb--1" aria-hidden="true" />
//       <span className="ind__orb ind__orb--2" aria-hidden="true" />

//       {/* ══════════ HEADER ══════════ */}
//       <header className="ind__header">
//         <div className="ind__header-left">
//           <span className="ind__label" aria-label="Section label">
//             <span className="ind__label-line" aria-hidden="true" />
//             Industries We Serve
//           </span>
//           <h2 className="ind__heading" id="ind-heading">
//             Smart Solutions for<br />
//             <span className="ind__heading-accent">Every Industry</span>
//           </h2>
//         </div>

//         <p className="ind__desc">
//           From fintech to government — we build technology that solves real problems
//           at scale, tailored to the unique demands of each sector we work in.
//         </p>

//         <div className="ind__header-stats">
//           <div className="ind__hstat">
//             <strong>8+</strong>
//             <span>Industries</span>
//           </div>
//           <div className="ind__hstat-divider" aria-hidden="true" />
//           <div className="ind__hstat">
//             <strong>50+</strong>
//             <span>Projects</span>
//           </div>
//           <div className="ind__hstat-divider" aria-hidden="true" />
//           <div className="ind__hstat">
//             <strong>12+</strong>
//             <span>Countries</span>
//           </div>
//         </div>
//       </header>

//       {/* ══════════ BODY ══════════ */}
//       <div className="ind__body">

//         {/* LEFT: pill tabs */}
//         <nav className="ind__tabs" aria-label="Industry tabs" role="tablist">
//           {INDUSTRIES.map((ind, i) => (
//             <button
//               key={ind.id}
//               role="tab"
//               aria-selected={activeId === ind.id}
//               aria-controls={`ind-panel-${ind.id}`}
//               id={`ind-tab-${ind.id}`}
//               className={`ind__tab${activeId === ind.id ? " ind__tab--active" : ""}`}
//               style={{ "--accent": ind.color, animationDelay: `${i * 60}ms` }}
//               onClick={() => setActiveId(ind.id)}
//             >
//               <span className="ind__tab-icon" aria-hidden="true">{ind.icon}</span>
//               <span className="ind__tab-text">
//                 <span className="ind__tab-label">{ind.label}</span>
//                 <span className="ind__tab-title">{ind.title}</span>
//               </span>
//               <span className="ind__tab-arrow" aria-hidden="true">›</span>
//             </button>
//           ))}
//         </nav>

//         {/* RIGHT: detail panel */}
//         {INDUSTRIES.map((ind) => (
//           <div
//             key={ind.id}
//             id={`ind-panel-${ind.id}`}
//             role="tabpanel"
//             aria-labelledby={`ind-tab-${ind.id}`}
//             className={`ind__panel${activeId === ind.id ? " ind__panel--active" : ""}`}
//             style={{ "--accent": ind.color }}
//             itemScope
//             itemType="https://schema.org/ListItem"
//           >
//             <meta itemProp="name" content={ind.title} />

//             <div className="ind__panel-top">
//               <div className="ind__panel-icon" aria-hidden="true">
//                 {ind.icon}
//               </div>
//               <span className="ind__panel-badge">{ind.label}</span>
//             </div>

//             <h3 className="ind__panel-title" itemProp="description">
//               {ind.title}
//             </h3>

//             <p className="ind__panel-desc">{ind.desc}</p>

//             <div className="ind__panel-stat">
//               <span className="ind__panel-stat-num">{ind.stat}</span>
//               <span className="ind__panel-stat-label">{ind.statLabel}</span>
//             </div>

//             <ul className="ind__panel-tags" aria-label="Solution areas">
//               {ind.tags.map((tag) => (
//                 <li key={tag} className="ind__panel-tag">{tag}</li>
//               ))}
//             </ul>

//             {/* ── FIX: was `() => (handleExploreSolution)` — now correctly calls with ind.id ── */}
//             <button
//               className="ind__panel-cta"
//               aria-label={`Learn more about our ${ind.title} solutions`}
//               onClick={() => handleExploreSolution(ind.id)}
//             >
//               Explore Solutions
//               <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
//                 <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ══════════ MOBILE HORIZONTAL SLIDER CARDS ══════════ */}
//       <div className="ind__cards-wrapper">
//         <div className="ind__cards-header">
//           <h3 className="ind__cards-title">Explore Our Solutions</h3>
//           <div className="ind__cards-nav">
//             <button
//               className={`ind__cards-nav-btn${!canScrollLeft ? " disabled" : ""}`}
//               onClick={() => scrollHorizontal("left")}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//             >
//               ‹
//             </button>
//             <button
//               className={`ind__cards-nav-btn${!canScrollRight ? " disabled" : ""}`}
//               onClick={() => scrollHorizontal("right")}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//             >
//               ›
//             </button>
//           </div>
//         </div>

//         <div className="ind__cards-container" ref={scrollContainerRef}>
//           {INDUSTRIES.map((ind, i) => (
//             <article
//               key={ind.id}
//               role="listitem"
//               className="ind__card"
//               style={{ "--accent": ind.color, animationDelay: `${i * 80}ms` }}
//               itemScope
//               itemType="https://schema.org/ListItem"
//             >
//               <meta itemProp="name" content={ind.title} />

//               <div className="ind__card-icon" aria-hidden="true">{ind.icon}</div>
//               <span className="ind__card-badge">{ind.label}</span>
//               <h3 className="ind__card-title">{ind.title}</h3>
//               <p className="ind__card-desc">{ind.desc}</p>

//               <div className="ind__card-stat">
//                 <strong>{ind.stat}</strong>
//                 <span>{ind.statLabel}</span>
//               </div>

//               <ul className="ind__card-tags">
//                 {ind.tags.map((tag) => (
//                   <li key={tag}>{tag}</li>
//                 ))}
//               </ul>

//               {/* ── FIX: single CTA button inside article, correctly calls handleExploreSolution ── */}
//               <button
//                 className="ind__card-cta"
//                 aria-label={`Learn more about our ${ind.title} solutions`}
//                 onClick={() => handleExploreSolution(ind.id)}
//               >
//                 Explore Solutions
//                 <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
//                   <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Industries.css";

/* ── SVG Icons ── */
const FinanceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="28" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="18" y="20" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="28" y="14" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="38" y="8"  width="6" height="32" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M6 42h38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const HealthIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 40C24 40 8 30 8 18a8 8 0 0 1 16 0 8 8 0 0 1 16 0c0 12-16 22-16 22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M20 18h8M24 14v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const EduIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 10L6 20l18 10 18-10-18-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M14 25v10c0 3 4.5 6 10 6s10-3 10-6V25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M40 20v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const RetailIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 12h32l-4 20H12L8 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M8 12L6 6H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="16" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="32" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 22l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogisticsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="18" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M32 24h6l6 8v4h-12V24Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="12" cy="38" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="36" cy="38" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 18V10h20v8" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

const RealEstateIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M6 22L24 8l18 14v20H6V22Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M18 42V30h12v12" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 18h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const ManufIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M6 36L14 18l8 10 8-16 12 24H6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M36 9V6M36 22v-3M41 14h3M28 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const GovtIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 6l20 10H4L24 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <rect x="8"  y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="17" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="26" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="35" y="18" width="5" height="18" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 38h40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

/* ── Industry data ── */
const INDUSTRIES = [
  {
    id: "finance",
    label: "FinTech",
    title: "Finance & Banking",
    desc: "AI-driven analytics, fraud detection, and seamless digital banking experiences that keep customers ahead of the curve.",
    tags: ["Risk Analytics", "Payment Systems", "RegTech", "Open Banking"],
    stat: "3x faster",
    statLabel: "Transaction processing",
    icon: <FinanceIcon />,
    color: "#6c63ff",
  },
  {
    id: "health",
    label: "HealthTech",
    title: "Healthcare & Life Sciences",
    desc: "Digital health platforms, patient management systems, and data pipelines that improve outcomes and reduce operational load.",
    tags: ["Telemedicine", "EHR Systems", "AI Diagnostics", "Compliance"],
    stat: "40% cut",
    statLabel: "In admin overhead",
    icon: <HealthIcon />,
    color: "#22c55e",
  },
  {
    id: "edu",
    label: "EdTech",
    title: "Education & E-Learning",
    desc: "Adaptive learning platforms and LMS solutions that personalize education for millions of learners worldwide.",
    tags: ["LMS Platforms", "Adaptive Learning", "Live Classrooms", "Analytics"],
    stat: "2.4x",
    statLabel: "Learner engagement",
    icon: <EduIcon />,
    color: "#f59e0b",
  },
  {
    id: "retail",
    label: "RetailTech",
    title: "Retail & E-Commerce",
    desc: "End-to-end commerce solutions — from storefront to fulfilment — powered by personalization engines and real-time data.",
    tags: ["D2C Platforms", "Personalization", "Inventory AI", "Omnichannel"],
    stat: "58% lift",
    statLabel: "In conversion rate",
    icon: <RetailIcon />,
    color: "#ec4899",
  },
  {
    id: "logistics",
    label: "LogiTech",
    title: "Logistics & Supply Chain",
    desc: "Smart route optimization, real-time tracking, and warehouse automation that cut costs and keep deliveries on time.",
    tags: ["Route AI", "Fleet Tracking", "WMS", "Last-Mile Tech"],
    stat: "30% lower",
    statLabel: "Logistics cost",
    icon: <LogisticsIcon />,
    color: "#0ea5e9",
  },
  {
    id: "realestate",
    label: "PropTech",
    title: "Real Estate & PropTech",
    desc: "Property platforms with virtual tours, smart search, and valuation models that modernize how people find their next home.",
    tags: ["Virtual Tours", "Smart Search", "CRM", "Valuation AI"],
    stat: "5x faster",
    statLabel: "Property discovery",
    icon: <RealEstateIcon />,
    color: "#8b5cf6",
  },
  {
    id: "manufacturing",
    label: "Industry 4.0",
    title: "Manufacturing & IoT",
    desc: "Connected factories powered by predictive maintenance, IoT dashboards, and process automation that scale production efficiently.",
    tags: ["IoT Dashboards", "Predictive Maint.", "Digital Twins", "ERP"],
    stat: "22% reduction",
    statLabel: "In downtime",
    icon: <ManufIcon />,
    color: "#f97316",
  },
  {
    id: "govt",
    label: "GovTech",
    title: "Government & Public Sector",
    desc: "Secure, accessible digital services that modernize citizen engagement, streamline workflows, and bring transparency to governance.",
    tags: ["e-Governance", "Citizen Portals", "Data Security", "Compliance"],
    stat: "80% digital",
    statLabel: "Service adoption",
    icon: <GovtIcon />,
    color: "#14b8a6",
  },
];

/* ── Component ── */
const Industries = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeId, setActiveId] = useState("finance");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();

  /* Intersection observer — trigger entrance animation once */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Handle horizontal scroll buttons */
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [inView]);

  const scrollHorizontal = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  /* ── FIX: handleExploreSolution always calls navigate with the given id ── */
  const handleExploreSolution = (industryId) => {
    const targetId = industryId || activeId;
    navigate(`/industries/${targetId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="industries"
      className={`ind ${inView ? "ind--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ind-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Industries We Serve — SkyLith Technology" />

      {/* decorative orbs */}
      <span className="ind__orb ind__orb--1" aria-hidden="true" />
      <span className="ind__orb ind__orb--2" aria-hidden="true" />

      {/* ══════════ HEADER ══════════ */}
      <header className="ind__header">
        <div className="ind__header-left">
          <span className="ind__label" aria-label="Section label">
            <span className="ind__label-line" aria-hidden="true" />
            Industries We Serve
          </span>
          <h2 className="ind__heading" id="ind-heading">
            Smart Solutions for<br />
            <span className="ind__heading-accent">Every Industry</span>
          </h2>
        </div>

        <p className="ind__desc">
          From fintech to government — we build technology that solves real problems
          at scale, tailored to the unique demands of each sector we work in.
        </p>

        <div className="ind__header-stats">
          <div className="ind__hstat">
            <strong>8+</strong>
            <span>Industries</span>
          </div>
          <div className="ind__hstat-divider" aria-hidden="true" />
          <div className="ind__hstat">
            <strong>50+</strong>
            <span>Projects</span>
          </div>
          <div className="ind__hstat-divider" aria-hidden="true" />
          <div className="ind__hstat">
            <strong>12+</strong>
            <span>Countries</span>
          </div>
        </div>
      </header>

      {/* ══════════ BODY ══════════ */}
      <div className="ind__body">

        {/* LEFT: pill tabs */}
        <nav className="ind__tabs" aria-label="Industry tabs" role="tablist">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.id}
              role="tab"
              aria-selected={activeId === ind.id}
              aria-controls={`ind-panel-${ind.id}`}
              id={`ind-tab-${ind.id}`}
              className={`ind__tab${activeId === ind.id ? " ind__tab--active" : ""}`}
              style={{ "--accent": ind.color, animationDelay: `${i * 60}ms` }}
              onClick={() => setActiveId(ind.id)}
            >
              <span className="ind__tab-icon" aria-hidden="true">{ind.icon}</span>
              <span className="ind__tab-text">
                <span className="ind__tab-label">{ind.label}</span>
                <span className="ind__tab-title">{ind.title}</span>
              </span>
              <span className="ind__tab-arrow" aria-hidden="true">›</span>
            </button>
          ))}
        </nav>

        {/* RIGHT: detail panel */}
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            id={`ind-panel-${ind.id}`}
            role="tabpanel"
            aria-labelledby={`ind-tab-${ind.id}`}
            className={`ind__panel${activeId === ind.id ? " ind__panel--active" : ""}`}
            style={{ "--accent": ind.color }}
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="name" content={ind.title} />

            <div className="ind__panel-top">
              <div className="ind__panel-icon" aria-hidden="true">
                {ind.icon}
              </div>
              <span className="ind__panel-badge">{ind.label}</span>
            </div>

            <h3 className="ind__panel-title" itemProp="description">
              {ind.title}
            </h3>

            <p className="ind__panel-desc">{ind.desc}</p>

            <div className="ind__panel-stat">
              <span className="ind__panel-stat-num">{ind.stat}</span>
              <span className="ind__panel-stat-label">{ind.statLabel}</span>
            </div>

            <ul className="ind__panel-tags" aria-label="Solution areas">
              {ind.tags.map((tag) => (
                <li key={tag} className="ind__panel-tag">{tag}</li>
              ))}
            </ul>

            {/* ── FIX: was `() => (handleExploreSolution)` — now correctly calls with ind.id ── */}
            <button
              className="ind__panel-cta"
              aria-label={`Learn more about our ${ind.title} solutions`}
              onClick={() => handleExploreSolution(ind.id)}
            >
              Explore Solutions
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* ══════════ MOBILE HORIZONTAL SLIDER CARDS ══════════ */}
      <div className="ind__cards-wrapper">
        <div className="ind__cards-header">
          <h3 className="ind__cards-title">Explore Our Solutions</h3>
          <div className="ind__cards-nav">
            <button
              className={`ind__cards-nav-btn${!canScrollLeft ? " disabled" : ""}`}
              onClick={() => scrollHorizontal("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              className={`ind__cards-nav-btn${!canScrollRight ? " disabled" : ""}`}
              onClick={() => scrollHorizontal("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>

        <div className="ind__cards-container" ref={scrollContainerRef}>
          {INDUSTRIES.map((ind, i) => (
            <article
              key={ind.id}
              role="listitem"
              className="ind__card"
              style={{ "--accent": ind.color, animationDelay: `${i * 80}ms` }}
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="name" content={ind.title} />

              <div className="ind__card-icon" aria-hidden="true">{ind.icon}</div>
              <span className="ind__card-badge">{ind.label}</span>
              <h3 className="ind__card-title">{ind.title}</h3>
              <p className="ind__card-desc">{ind.desc}</p>

              <div className="ind__card-stat">
                <strong>{ind.stat}</strong>
                <span>{ind.statLabel}</span>
              </div>

              <ul className="ind__card-tags">
                {ind.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              {/* ── FIX: single CTA button inside article, correctly calls handleExploreSolution ── */}
              <button
                className="ind__card-cta"
                aria-label={`Learn more about our ${ind.title} solutions`}
                onClick={() => handleExploreSolution(ind.id)}
              >
                Explore Solutions
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;