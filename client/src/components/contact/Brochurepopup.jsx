// import React, { useState, useEffect } from "react";
// import "./BrochurePopup.css";
// import logo from "../../assets/images/BLT.webp";

// /**
//  * BROCHURE POPUP — Download Brochure / View Case Studies
//  * Props:
//  *   isOpen    {boolean}
//  *   onClose   {function}
//  *   mode      {"brochure"|"casestudies"} – which tab to open first
//  *   industry  {string}  – optional filter label (e.g. "FinTech")
//  *   color     {string}  – optional accent color
//  */

// /* ── Brochure assets ── */
// const BROCHURES = [
//   {
//     id: "company",
//     title: "Company Overview",
//     desc: "Full capabilities, team, and technology stack.",
//     icon: "🏢",
//     pages: "12 pages",
//     size: "2.4 MB",
//     url: "/brochures/skylith-company-overview.pdf",
//   },
//   {
//     id: "fintech",
//     title: "FinTech Solutions",
//     desc: "Banking, payments, and RegTech capabilities.",
//     icon: "💳",
//     pages: "8 pages",
//     size: "1.8 MB",
//     url: "/brochures/skylith-fintech.pdf",
//   },
//   {
//     id: "healthtech",
//     title: "HealthTech Solutions",
//     desc: "EHR, telemedicine, and AI diagnostics.",
//     icon: "🏥",
//     pages: "8 pages",
//     size: "1.6 MB",
//     url: "/brochures/skylith-healthtech.pdf",
//   },
//   {
//     id: "industry40",
//     title: "Industry 4.0 & IoT",
//     desc: "Smart manufacturing and predictive maintenance.",
//     icon: "⚙️",
//     pages: "10 pages",
//     size: "2.1 MB",
//     url: "/brochures/skylith-industry40.pdf",
//   },
// ];

// /* ── Case study data ── */
// const CASE_STUDIES = [
//   {
//     id: "neo",
//     industry: "FinTech",
//     color: "#6c63ff",
//     title: "3x Faster Transactions for a Neobank",
//     client: "Leading Neobank · 2M+ users",
//     challenge: "Legacy monolith causing 8-second average transaction latency and frequent outages during peak hours.",
//     solution: "Migrated to cloud-native microservices with event-driven architecture and real-time fraud detection.",
//     result: "3x faster processing, 99.99% uptime, 70% reduction in fraud losses.",
//     metric: "3×",
//     metricLabel: "Faster",
//     tags: ["Core Banking", "Microservices", "Fraud AI"],
//   },
//   {
//     id: "hospital",
//     industry: "HealthTech",
//     color: "#22c55e",
//     title: "40% Admin Reduction for 500-Bed Hospital",
//     client: "Multi-site Hospital Network · 500 beds",
//     challenge: "Paper-heavy workflows causing 4-hour average patient check-in and billing delays across 3 campuses.",
//     solution: "Unified patient management system with HL7/FHIR integration, digital forms, and automated billing.",
//     result: "40% reduction in admin overhead, 18-minute average check-in, 95% billing accuracy.",
//     metric: "40%",
//     metricLabel: "Less Admin",
//     tags: ["EHR", "FHIR", "Digital Forms"],
//   },
//   {
//     id: "edtech",
//     industry: "EdTech",
//     color: "#f59e0b",
//     title: "2.4x Engagement Lift for Global EdTech",
//     client: "Global E-Learning Platform · 500K learners",
//     challenge: "One-size-fits-all course delivery leading to 68% dropout rates and poor completion metrics.",
//     solution: "Adaptive learning engine with AI-personalized paths, gamification, and real-time instructor dashboards.",
//     result: "2.4x learner engagement, dropout rate down to 31%, NPS improved by 42 points.",
//     metric: "2.4×",
//     metricLabel: "Engagement",
//     tags: ["Adaptive AI", "LMS", "Gamification"],
//   },
//   {
//     id: "logistics",
//     industry: "LogiTech",
//     color: "#0ea5e9",
//     title: "30% Cost Reduction for Pan-India E-Commerce",
//     client: "D2C Brand · 800 daily deliveries",
//     challenge: "Manual route planning causing 22% late deliveries and ₹14L/month in excess fuel costs.",
//     solution: "AI route optimization with live traffic, dynamic rescheduling, and last-mile customer tracking.",
//     result: "30% logistics cost reduction, on-time delivery up to 94%, customer CSAT +18%.",
//     metric: "30%",
//     metricLabel: "Cost Saved",
//     tags: ["Route AI", "Last Mile", "IoT Tracking"],
//   },
// ];

// const BrochurePopup = ({ isOpen, onClose, mode = "brochure", industry = "", color = "#6c63ff" }) => {
//   const [activeTab, setActiveTab] = useState(mode);
//   const [downloading, setDownloading] = useState(null);
//   const [expandedStudy, setExpandedStudy] = useState(null);

//   /* Sync mode prop */
//   useEffect(() => { setActiveTab(mode); }, [mode]);

//   useEffect(() => {
//     if (!isOpen) return;
//     const onKey = (e) => { if (e.key === "Escape") onClose(); };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [isOpen, onClose]);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleDownload = (brochure) => {
//     setDownloading(brochure.id);
//     /* Trigger actual download — replace url with real hosted PDF */
//     const link = document.createElement("a");
//     link.href = brochure.url;
//     link.download = `SkyLith-${brochure.title.replace(/\s+/g, "-")}.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setTimeout(() => setDownloading(null), 1500);
//   };

//   return (
//     <div
//       className="bp-overlay"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="bp-title"
//       onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
//     >
//       <div className="bp-popup" style={{ "--bp-accent": color }}>

//         {/* ── CLOSE ── */}
//         <button className="bp-close" onClick={onClose} aria-label="Close" type="button">✕</button>

//         {/* ── HEADER ── */}
//         <div className="bp-header">
//           <img src={logo} alt="SkyLith Technology" className="bp-logo" />
//           <div className="bp-header-text">
//             {industry && <span className="bp-eyebrow" style={{ color }}>{industry}</span>}
//             <h2 id="bp-title">Resources & Case Studies</h2>
//           </div>
//         </div>

//         {/* ── TABS ── */}
//         <div className="bp-tabs" role="tablist">
//           <button
//             role="tab"
//             aria-selected={activeTab === "casestudies"}
//             className={`bp-tab${activeTab === "casestudies" ? " bp-tab--active" : ""}`}
//             onClick={() => setActiveTab("casestudies")}
//           >
//             📊 Case Studies
//           </button>
//           <button
//             role="tab"
//             aria-selected={activeTab === "brochure"}
//             className={`bp-tab${activeTab === "brochure" ? " bp-tab--active" : ""}`}
//             onClick={() => setActiveTab("brochure")}
//           >
//             📄 Brochures
//           </button>
//         </div>

//         {/* ── CASE STUDIES PANEL ── */}
//         {activeTab === "casestudies" && (
//           <div className="bp-panel" role="tabpanel">
//             <div className="bp-cs-list">
//               {CASE_STUDIES.map((cs) => (
//                 <div key={cs.id} className="bp-cs-card" style={{ "--cs-color": cs.color }}>
//                   <div className="bp-cs-card-top">
//                     <div className="bp-cs-meta">
//                       <span className="bp-cs-industry" style={{ color: cs.color, background: `${cs.color}15` }}>
//                         {cs.industry}
//                       </span>
//                       <span className="bp-cs-client">{cs.client}</span>
//                     </div>
//                     <div className="bp-cs-metric" style={{ color: cs.color }}>
//                       <strong>{cs.metric}</strong>
//                       <span>{cs.metricLabel}</span>
//                     </div>
//                   </div>

//                   <h3 className="bp-cs-title">{cs.title}</h3>

//                   {expandedStudy === cs.id ? (
//                     <div className="bp-cs-body">
//                       <div className="bp-cs-section">
//                         <span className="bp-cs-section-label">Challenge</span>
//                         <p>{cs.challenge}</p>
//                       </div>
//                       <div className="bp-cs-section">
//                         <span className="bp-cs-section-label">Solution</span>
//                         <p>{cs.solution}</p>
//                       </div>
//                       <div className="bp-cs-section">
//                         <span className="bp-cs-section-label">Result</span>
//                         <p className="bp-cs-result">{cs.result}</p>
//                       </div>
//                       <div className="bp-cs-tags">
//                         {cs.tags.map((t) => <span key={t} className="bp-cs-tag">{t}</span>)}
//                       </div>
//                       <button
//                         className="bp-cs-toggle"
//                         onClick={() => setExpandedStudy(null)}
//                       >
//                         Show less ↑
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       className="bp-cs-toggle"
//                       onClick={() => setExpandedStudy(cs.id)}
//                     >
//                       Read case study →
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ── BROCHURES PANEL ── */}
//         {activeTab === "brochure" && (
//           <div className="bp-panel" role="tabpanel">
//             <p className="bp-brochure-intro">
//               Download our product brochures for an in-depth look at our solutions, team, and technology.
//             </p>
//             <div className="bp-brochure-list">
//               {BROCHURES.map((br) => (
//                 <div key={br.id} className="bp-brochure-item">
//                   <span className="bp-brochure-icon">{br.icon}</span>
//                   <div className="bp-brochure-info">
//                     <strong>{br.title}</strong>
//                     <span>{br.desc}</span>
//                     <span className="bp-brochure-meta">{br.pages} · {br.size}</span>
//                   </div>
//                   <button
//                     className={`bp-download-btn${downloading === br.id ? " bp-download-btn--loading" : ""}`}
//                     onClick={() => handleDownload(br)}
//                     disabled={!!downloading}
//                     aria-label={`Download ${br.title}`}
//                     style={{
//                       background: downloading === br.id
//                         ? "#e5e7eb"
//                         : `linear-gradient(135deg, ${color}, ${color}cc)`,
//                     }}
//                   >
//                     {downloading === br.id ? (
//                       <span className="bp-spinner" aria-hidden="true" />
//                     ) : (
//                       <>
//                         <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
//                           <path d="M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//                           <path d="M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//                         </svg>
//                         PDF
//                       </>
//                     )}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <p className="bp-brochure-note">
//               Need a custom capability deck?{" "}
//               <button className="bp-inline-btn" onClick={onClose}>
//                 Talk to us →
//               </button>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BrochurePopup;



import React, { useState, useEffect } from "react";
import "./Brochurepopup.css";
import logo from "../../assets/images/BLT.webp";

import {
  FiBarChart2,
  FiFileText,
  FiHome,
  FiCreditCard,
  FiActivity,
  FiSettings,
  FiDownload,
  FiX,
} from "react-icons/fi";

/**
 * BROCHURE POPUP — Download Brochure / View Case Studies
 */

const BROCHURES = [
  {
    id: "company",
    title: "Company Overview",
    desc: "Full capabilities, team, and technology stack.",
    icon: <FiHome />,
    pages: "12 pages",
    size: "2.4 MB",
    url: "/brochures/skylith-company-overview.pdf",
  },
  {
    id: "fintech",
    title: "FinTech Solutions",
    desc: "Banking, payments, and RegTech capabilities.",
    icon: <FiCreditCard />,
    pages: "8 pages",
    size: "1.8 MB",
    url: "/brochures/skylith-fintech.pdf",
  },
  {
    id: "healthtech",
    title: "HealthTech Solutions",
    desc: "EHR, telemedicine, and AI diagnostics.",
    icon: <FiActivity />,
    pages: "8 pages",
    size: "1.6 MB",
    url: "/brochures/skylith-healthtech.pdf",
  },
  {
    id: "industry40",
    title: "Industry 4.0 & IoT",
    desc: "Smart manufacturing and predictive maintenance.",
    icon: <FiSettings />,
    pages: "10 pages",
    size: "2.1 MB",
    url: "/brochures/skylith-industry40.pdf",
  },
];

const CASE_STUDIES = [
  {
    id: "neo",
    industry: "FinTech",
    color: "#6c63ff",
    title: "3x Faster Transactions for a Neobank",
    client: "Leading Neobank · 2M+ users",
    challenge:
      "Legacy monolith causing 8-second average transaction latency and frequent outages during peak hours.",
    solution:
      "Migrated to cloud-native microservices with event-driven architecture and real-time fraud detection.",
    result:
      "3x faster processing, 99.99% uptime, 70% reduction in fraud losses.",
    metric: "3×",
    metricLabel: "Faster",
    tags: ["Core Banking", "Microservices", "Fraud AI"],
  },
  {
    id: "hospital",
    industry: "HealthTech",
    color: "#22c55e",
    title: "40% Admin Reduction for 500-Bed Hospital",
    client: "Multi-site Hospital Network · 500 beds",
    challenge:
      "Paper-heavy workflows causing 4-hour average patient check-in and billing delays across 3 campuses.",
    solution:
      "Unified patient management system with HL7/FHIR integration, digital forms, and automated billing.",
    result:
      "40% reduction in admin overhead, 18-minute average check-in, 95% billing accuracy.",
    metric: "40%",
    metricLabel: "Less Admin",
    tags: ["EHR", "FHIR", "Digital Forms"],
  },
];

const BrochurePopup = ({
  isOpen,
  onClose,
  mode = "brochure",
  industry = "",
  color = "#6c63ff",
}) => {
  const [activeTab, setActiveTab] = useState(mode);
  const [downloading, setDownloading] = useState(null);
  const [expandedStudy, setExpandedStudy] = useState(null);

  useEffect(() => {
    setActiveTab(mode);
  }, [mode]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = (brochure) => {
    setDownloading(brochure.id);

    const link = document.createElement("a");
    link.href = brochure.url;
    link.download = `${brochure.title}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(null), 1500);
  };

  return (
    <div
      className="bp-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bp-popup" style={{ "--bp-accent": color }}>
        {/* CLOSE */}
        <button className="bp-close" onClick={onClose}>
          <FiX />
        </button>

        {/* HEADER */}
        <div className="bp-header">
          <img src={logo} alt="logo" className="bp-logo" />

          <div className="bp-header-text">
            {industry && (
              <span className="bp-eyebrow" style={{ color }}>
                {industry}
              </span>
            )}

            <h2>Resources & Case Studies</h2>
          </div>
        </div>

        {/* TABS */}
        <div className="bp-tabs">
          <button
            className={`bp-tab ${
              activeTab === "casestudies" ? "bp-tab--active" : ""
            }`}
            onClick={() => setActiveTab("casestudies")}
          >
            <FiBarChart2 />
            Case Studies
          </button>

          <button
            className={`bp-tab ${
              activeTab === "brochure" ? "bp-tab--active" : ""
            }`}
            onClick={() => setActiveTab("brochure")}
          >
            <FiFileText />
            Brochures
          </button>
        </div>

        {/* CASE STUDIES */}
        {activeTab === "casestudies" && (
          <div className="bp-panel">
            <div className="bp-cs-list">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.id}
                  className="bp-cs-card"
                  style={{ "--cs-color": cs.color }}
                >
                  <div className="bp-cs-card-top">
                    <div className="bp-cs-meta">
                      <span
                        className="bp-cs-industry"
                        style={{
                          color: cs.color,
                          background: `${cs.color}15`,
                        }}
                      >
                        {cs.industry}
                      </span>

                      <span className="bp-cs-client">{cs.client}</span>
                    </div>

                    <div
                      className="bp-cs-metric"
                      style={{ color: cs.color }}
                    >
                      <strong>{cs.metric}</strong>
                      <span>{cs.metricLabel}</span>
                    </div>
                  </div>

                  <h3 className="bp-cs-title">{cs.title}</h3>

                  {expandedStudy === cs.id ? (
                    <div className="bp-cs-body">
                      <div className="bp-cs-section">
                        <span className="bp-cs-section-label">
                          Challenge
                        </span>
                        <p>{cs.challenge}</p>
                      </div>

                      <div className="bp-cs-section">
                        <span className="bp-cs-section-label">
                          Solution
                        </span>
                        <p>{cs.solution}</p>
                      </div>

                      <div className="bp-cs-section">
                        <span className="bp-cs-section-label">Result</span>
                        <p className="bp-cs-result">{cs.result}</p>
                      </div>

                      <div className="bp-cs-tags">
                        {cs.tags.map((tag) => (
                          <span key={tag} className="bp-cs-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        className="bp-cs-toggle"
                        onClick={() => setExpandedStudy(null)}
                      >
                        Show less ↑
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bp-cs-toggle"
                      onClick={() => setExpandedStudy(cs.id)}
                    >
                      Read case study →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BROCHURES */}
        {activeTab === "brochure" && (
          <div className="bp-panel">
            <p className="bp-brochure-intro">
              Download our product brochures for an in-depth look at our
              solutions, team, and technology.
            </p>

            <div className="bp-brochure-list">
              {BROCHURES.map((br) => (
                <div key={br.id} className="bp-brochure-item">
                  <span className="bp-brochure-icon">{br.icon}</span>

                  <div className="bp-brochure-info">
                    <strong>{br.title}</strong>
                    <span>{br.desc}</span>

                    <span className="bp-brochure-meta">
                      {br.pages} · {br.size}
                    </span>
                  </div>

                  <button
                    className={`bp-download-btn ${
                      downloading === br.id
                        ? "bp-download-btn--loading"
                        : ""
                    }`}
                    onClick={() => handleDownload(br)}
                    disabled={!!downloading}
                    style={{
                      background:
                        downloading === br.id
                          ? "#e5e7eb"
                          : `linear-gradient(135deg, ${color}, ${color}cc)`,
                    }}
                  >
                    {downloading === br.id ? (
                      <span className="bp-spinner"></span>
                    ) : (
                      <>
                        <FiDownload />
                        PDF
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <p className="bp-brochure-note">
              Need a custom capability deck?{" "}
              <button className="bp-inline-btn" onClick={onClose}>
                Talk to us →
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrochurePopup;