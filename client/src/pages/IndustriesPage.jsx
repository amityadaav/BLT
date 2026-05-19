
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./IndustriesPage.css";

/* ── Popups ── */
import ConsultationPopup  from "../components/contact/Consultationpopup";
import ConversationPopup  from "../components/contact/Conversationpopup";
import BrochurePopup      from "../components/contact/Brochurepopup";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

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

/* ── Industry Data ── */
const INDUSTRIES = [
  {
    id: "finance", label: "FinTech", title: "Finance & Banking",
    desc: "AI-driven analytics, fraud detection, and seamless digital banking experiences that keep customers ahead of the curve.",
    longDesc: "We architect end-to-end financial technology solutions that combine real-time data intelligence with regulatory compliance. From core banking modernization to AI-powered credit scoring, our platforms are built for scale, security, and speed.",
    tags: ["Risk Analytics", "Payment Systems", "RegTech", "Open Banking"],
    stat: "3x faster", statLabel: "Transaction processing",
    Icon: FinanceIcon, color: "#6c63ff",
    solutions: [
      { title: "Core Banking Modernization", desc: "Migrate legacy systems to cloud-native microservices architecture for real-time processing and 99.99% uptime." },
      { title: "Fraud Detection Engine", desc: "ML-powered transaction monitoring that catches anomalies in milliseconds, reducing fraud losses by up to 70%." },
      { title: "Open Banking APIs", desc: "PSD2-compliant API layers enabling seamless third-party integrations and embedded finance products." },
      { title: "RegTech Compliance Suite", desc: "Automated reporting, AML screening, and KYC verification workflows built for global regulatory frameworks." },
    ],
    benefits: ["ISO 27001 Certified", "PCI-DSS Compliant", "Real-time Processing", "Multi-currency Support"],
    caseStudy: { metric: "3x", detail: "Faster transaction processing for a leading neobank serving 2M+ users." },
  },
  {
    id: "health", label: "HealthTech", title: "Healthcare & Life Sciences",
    desc: "Digital health platforms, patient management systems, and data pipelines that improve outcomes and reduce operational load.",
    longDesc: "Our healthcare technology solutions bridge the gap between clinical excellence and operational efficiency. We build HIPAA-compliant platforms that empower providers, patients, and researchers to collaborate and make data-driven decisions.",
    tags: ["Telemedicine", "EHR Systems", "AI Diagnostics", "Compliance"],
    stat: "40% cut", statLabel: "In admin overhead",
    Icon: HealthIcon, color: "#22c55e",
    solutions: [
      { title: "Telemedicine Platform", desc: "HIPAA-compliant video consultation with integrated EHR, e-prescriptions, and patient scheduling." },
      { title: "AI Diagnostic Assistant", desc: "Computer vision models for radiology image analysis that support faster, more accurate diagnoses." },
      { title: "Patient Management System", desc: "Unified patient records, appointment workflows, and automated billing across multi-site hospital networks." },
      { title: "Clinical Data Pipeline", desc: "HL7/FHIR-compliant data integration connecting labs, devices, and clinical systems in real time." },
    ],
    benefits: ["HIPAA Compliant", "HL7/FHIR Ready", "99.9% Uptime SLA", "Multi-tenant Architecture"],
    caseStudy: { metric: "40%", detail: "Reduction in administrative overhead for a 500-bed hospital network post digital transformation." },
  },
  {
    id: "edu", label: "EdTech", title: "Education & E-Learning",
    desc: "Adaptive learning platforms and LMS solutions that personalize education for millions of learners worldwide.",
    longDesc: "We build scalable education technology that adapts to each learner's pace, style, and goals. Our platforms support everything from K-12 classrooms to enterprise upskilling programs, powered by AI personalization and real-time analytics.",
    tags: ["LMS Platforms", "Adaptive Learning", "Live Classrooms", "Analytics"],
    stat: "2.4x", statLabel: "Learner engagement",
    Icon: EduIcon, color: "#f59e0b",
    solutions: [
      { title: "Adaptive LMS", desc: "AI-powered learning management system that tailors content paths based on individual performance and engagement data." },
      { title: "Live Virtual Classroom", desc: "Low-latency live sessions with interactive whiteboards, breakout rooms, polls, and attendance tracking." },
      { title: "Assessment Engine", desc: "Auto-grading, plagiarism detection, and proctoring tools for secure, scalable online examinations." },
      { title: "Learning Analytics Dashboard", desc: "Real-time insights into learner progress, dropout prediction, and content effectiveness for instructors." },
    ],
    benefits: ["SCORM/xAPI Ready", "Multi-language Support", "Offline Mode", "Gamification Built-in"],
    caseStudy: { metric: "2.4x", detail: "Increase in learner engagement after deploying adaptive learning paths for a global EdTech platform." },
  },
  {
    id: "retail", label: "RetailTech", title: "Retail & E-Commerce",
    desc: "End-to-end commerce solutions — from storefront to fulfilment — powered by personalization engines and real-time data.",
    longDesc: "We engineer commerce platforms that convert browsers into buyers and buyers into loyal customers. Our solutions span headless storefronts, AI recommendation engines, and real-time inventory intelligence — all optimized for omnichannel retail.",
    tags: ["D2C Platforms", "Personalization", "Inventory AI", "Omnichannel"],
    stat: "58% lift", statLabel: "In conversion rate",
    Icon: RetailIcon, color: "#ec4899",
    solutions: [
      { title: "Headless Commerce Platform", desc: "Decoupled frontend architecture delivering blazing-fast storefronts with composable backend services." },
      { title: "AI Personalization Engine", desc: "Real-time product recommendations, dynamic pricing, and hyper-personalized marketing based on behavioral signals." },
      { title: "Inventory Intelligence", desc: "Demand forecasting, auto-replenishment, and multi-warehouse optimization to eliminate stockouts and overstock." },
      { title: "Omnichannel Order Management", desc: "Unified order processing across online, in-store, and marketplace channels with real-time fulfillment tracking." },
    ],
    benefits: ["Headless Architecture", "Real-time Inventory", "A/B Testing Native", "Marketplace Integrations"],
    caseStudy: { metric: "58%", detail: "Lift in conversion rate for a D2C fashion brand after implementing AI-powered personalization." },
  },
  {
    id: "logistics", label: "LogiTech", title: "Logistics & Supply Chain",
    desc: "Smart route optimization, real-time tracking, and warehouse automation that cut costs and keep deliveries on time.",
    longDesc: "Our logistics technology platforms bring intelligence to every node of the supply chain. From first-mile pickup to last-mile delivery, we build systems that optimize routes, predict delays, and automate warehouse operations at scale.",
    tags: ["Route AI", "Fleet Tracking", "WMS", "Last-Mile Tech"],
    stat: "30% lower", statLabel: "Logistics cost",
    Icon: LogisticsIcon, color: "#0ea5e9",
    solutions: [
      { title: "AI Route Optimization", desc: "Dynamic routing engine that factors traffic, weather, vehicle capacity, and time windows to minimize delivery time and cost." },
      { title: "Real-time Fleet Tracking", desc: "GPS-based live tracking with geofencing, driver behavior analytics, and fuel efficiency monitoring." },
      { title: "Warehouse Management System", desc: "Barcode/RFID-integrated WMS with slot allocation, pick-pack-ship workflows, and robotic integration APIs." },
      { title: "Last-Mile Delivery Platform", desc: "Customer-facing tracking, proof of delivery, and dynamic rescheduling for the final leg of fulfillment." },
    ],
    benefits: ["GPS + IoT Integration", "Multi-carrier Support", "Real-time ETAs", "Customs Automation"],
    caseStudy: { metric: "30%", detail: "Reduction in logistics cost for a pan-India e-commerce brand after deploying AI route optimization." },
  },
  {
    id: "realestate", label: "PropTech", title: "Real Estate & PropTech",
    desc: "Property platforms with virtual tours, smart search, and valuation models that modernize how people find their next home.",
    longDesc: "We reimagine the property journey from search to close. Our PropTech platforms combine immersive 3D experiences with AI-powered valuation, agent CRMs, and transaction management tools that make buying, selling, and renting seamless.",
    tags: ["Virtual Tours", "Smart Search", "CRM", "Valuation AI"],
    stat: "5x faster", statLabel: "Property discovery",
    Icon: RealEstateIcon, color: "#8b5cf6",
    solutions: [
      { title: "Immersive Property Portal", desc: "AI-powered search with 3D virtual tours, neighborhood insights, and smart filters for hyper-relevant property discovery." },
      { title: "Valuation Intelligence", desc: "Automated valuation models (AVM) using comparable sales, market trends, and property attributes for instant estimates." },
      { title: "Agent CRM & Lead Management", desc: "End-to-end CRM for real estate brokers with lead scoring, automated follow-ups, and deal pipeline visibility." },
      { title: "Digital Transaction Platform", desc: "E-sign, document management, and escrow coordination tools for a fully paperless property transaction." },
    ],
    benefits: ["3D Tour Ready", "API-first Architecture", "MLS Integration", "Mortgage Calculator Built-in"],
    caseStudy: { metric: "5x", detail: "Faster property discovery for homebuyers using AI-powered smart search on a leading property portal." },
  },
  {
    id: "manufacturing", label: "Industry 4.0", title: "Manufacturing & IoT",
    desc: "Connected factories powered by predictive maintenance, IoT dashboards, and process automation that scale production efficiently.",
    longDesc: "We connect the physical and digital worlds of manufacturing through IoT, digital twins, and intelligent automation. Our Industry 4.0 platforms give plant managers real-time visibility and predictive insights to maximize uptime and throughput.",
    tags: ["IoT Dashboards", "Predictive Maint.", "Digital Twins", "ERP"],
    stat: "22% reduction", statLabel: "In downtime",
    Icon: ManufIcon, color: "#f97316",
    solutions: [
      { title: "IoT Operations Dashboard", desc: "Real-time monitoring of machines, energy, and production KPIs across multiple plant floors in a single pane of glass." },
      { title: "Predictive Maintenance", desc: "Sensor-data ML models that predict equipment failure 72 hours in advance, reducing unplanned downtime significantly." },
      { title: "Digital Twin Platform", desc: "Virtual replicas of production lines for simulation, optimization, and remote diagnostics without halting operations." },
      { title: "MES & ERP Integration", desc: "Seamless bi-directional integration between shop floor systems and enterprise resource planning for end-to-end visibility." },
    ],
    benefits: ["OPC-UA / MQTT Ready", "Edge + Cloud Hybrid", "ISO 13485 Compliant", "Multi-plant Support"],
    caseStudy: { metric: "22%", detail: "Reduction in unplanned downtime for an automotive parts manufacturer using predictive maintenance AI." },
  },
  {
    id: "govt", label: "GovTech", title: "Government & Public Sector",
    desc: "Secure, accessible digital services that modernize citizen engagement, streamline workflows, and bring transparency to governance.",
    longDesc: "We partner with government agencies to build secure, scalable, and citizen-centric digital services. Our GovTech solutions modernize legacy systems, enable paperless workflows, and make public data actionable — ensuring transparency and trust.",
    tags: ["e-Governance", "Citizen Portals", "Data Security", "Compliance"],
    stat: "80% digital", statLabel: "Service adoption",
    Icon: GovtIcon, color: "#14b8a6",
    solutions: [
      { title: "Citizen Service Portal", desc: "Accessible, multi-language digital portal for government service requests, status tracking, and document submissions." },
      { title: "e-Governance Workflow Engine", desc: "Configurable workflow automation for approvals, inspections, and inter-departmental coordination without paper trails." },
      { title: "Secure Data Platform", desc: "End-to-end encrypted data lakes and analytics for policy insights, with role-based access control and audit trails." },
      { title: "Open Data & Transparency Dashboard", desc: "Public-facing data visualization portals that promote accountability and enable data-driven civic engagement." },
    ],
    benefits: ["WCAG 2.1 Accessible", "GDPR / Data Privacy Ready", "Air-gap Deployable", "Multilingual Support"],
    caseStudy: { metric: "80%", detail: "Digital service adoption rate achieved for a state government department within 12 months of portal launch." },
  },
];

/* ── Helper icons ── */
const BackArrow = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10l5 5 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ══════════════════════════════════════════════════════
   IndustriesPage
   ══════════════════════════════════════════════════════ */
const IndustriesPage = () => {
  const { industryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  /* ── State ── */
  const [inView, setInView] = useState(false);

  /* ── Popup state ── */
  const [consultationOpen, setConsultationOpen]   = useState(false);
  const [conversationOpen, setConversationOpen]   = useState(false);
  const [brochureOpen, setBrochureOpen]           = useState(false);
  const [brochureMode, setBrochureMode]           = useState("brochure"); // "brochure" | "casestudies"

  /* ── Derive industry ── */
  const getIndustryId = () => {
    if (industryId) return industryId;
    if (location.state?.selectedIndustry) return location.state.selectedIndustry;
    return "finance";
  };

  const currentIndustryId = getIndustryId();
  const industry = INDUSTRIES.find((i) => i.id === currentIndustryId) || INDUSTRIES[0];
  const otherIndustries = INDUSTRIES.filter((i) => i.id !== industry.id);
  const Icon = industry.Icon;

  /* ── Effects ── */
  useEffect(() => {
    const valid = INDUSTRIES.some((i) => i.id === currentIndustryId);
    if (!valid) navigate("/industries/finance", { replace: true });
  }, [currentIndustryId, navigate]);

  useEffect(() => {
    if (location.state?.selectedIndustry && !industryId) {
      const id = location.state.selectedIndustry;
      if (INDUSTRIES.some((i) => i.id === id)) {
        navigate(`/industries/${id}`, { replace: true });
      }
    }
  }, [location.state, industryId, navigate]);

  useEffect(() => {
    setInView(false);
    const t = setTimeout(() => setInView(true), 60);
    return () => clearTimeout(t);
  }, [currentIndustryId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndustryId]);

  /* ── Popup helpers ── */
  const openCaseStudies = () => {
    setBrochureMode("casestudies");
    setBrochureOpen(true);
  };
  const openBrochure = () => {
    setBrochureMode("brochure");
    setBrochureOpen(true);
  };

  /* ── Render ── */
  return (
    <>
    <Navbar />
    <div
      className={`ip ${inView ? "ip--visible" : ""}`}
      style={{ "--accent": industry.color }}
    >
      {/* Decorative orbs */}
      <span className="ip__orb ip__orb--1" aria-hidden="true" />
      <span className="ip__orb ip__orb--2" aria-hidden="true" />
      <span className="ip__orb ip__orb--3" aria-hidden="true" />

      {/* ── BREADCRUMB ── */}
      <nav className="ip__breadcrumb" aria-label="Breadcrumb">
        <button className="ip__back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <BackArrow />
          Back
        </button>
        <span className="ip__breadcrumb-sep" aria-hidden="true">/</span>
        <span className="ip__breadcrumb-current">Industries</span>
        <span className="ip__breadcrumb-sep" aria-hidden="true">/</span>
        <span className="ip__breadcrumb-industry" style={{ color: industry.color }}>
          {industry.label}
        </span>
      </nav>

      {/* ── HERO ── */}
      <header className="ip__hero" aria-labelledby="ip-heading">
        <div className="ip__hero-left">
          <div
            className="ip__hero-badge"
            style={{ background: `${industry.color}18`, color: industry.color }}
          >
            <span className="ip__hero-badge-icon" aria-hidden="true"><Icon /></span>
            {industry.label}
          </div>

          <h1 className="ip__hero-title" id="ip-heading">{industry.title}</h1>
          <p className="ip__hero-desc">{industry.longDesc}</p>

          <div className="ip__hero-tags" aria-label="Solution tags">
            {industry.tags.map((tag) => (
              <span key={tag} className="ip__hero-tag">{tag}</span>
            ))}
          </div>

          <div className="ip__hero-actions">
            {/* ── GET A FREE CONSULTATION ── */}
            <button
              className="ip__hero-cta ip__hero-cta--primary"
              onClick={() => setConsultationOpen(true)}
            >
              Get a Free Consultation
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* ── VIEW CASE STUDIES ── */}
            <button
              className="ip__hero-cta ip__hero-cta--ghost"
              onClick={openCaseStudies}
            >
              View Case Studies
            </button>
          </div>
        </div>

        <div className="ip__hero-right">
          <div className="ip__stat-card">
            <div className="ip__stat-card-icon" aria-hidden="true"><Icon /></div>
            <div className="ip__stat-card-content">
              <span className="ip__stat-card-num">{industry.stat}</span>
              <span className="ip__stat-card-label">{industry.statLabel}</span>
            </div>
            <p className="ip__stat-card-desc">{industry.caseStudy.detail}</p>
          </div>

          <ul className="ip__benefits" aria-label="Key benefits">
            {industry.benefits.map((b) => (
              <li key={b} className="ip__benefit">
                <span className="ip__benefit-check" aria-hidden="true"><CheckIcon /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ── SOLUTIONS ── */}
      <section className="ip__solutions" aria-labelledby="ip-solutions-heading">
        <div className="ip__solutions-header">
          <span className="ip__section-label">
            <span className="ip__section-label-line" aria-hidden="true" />
            What We Build
          </span>
          <h2 className="ip__solutions-title" id="ip-solutions-heading">
            Our <span className="ip__accent">{industry.label}</span> Solutions
          </h2>
          <p className="ip__solutions-desc">
            Purpose-built platforms designed to solve the hardest problems in{" "}
            {industry.title.toLowerCase()}.
          </p>
        </div>

        <div className="ip__solutions-grid" role="list">
          {industry.solutions.map((sol, i) => (
            <article
              key={sol.title}
              className="ip__sol-card"
              role="listitem"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="ip__sol-card-num" aria-hidden="true">0{i + 1}</div>
              <h3 className="ip__sol-card-title">{sol.title}</h3>
              <p className="ip__sol-card-desc">{sol.desc}</p>
              <div className="ip__sol-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY STRIP ── */}
      <div
        className="ip__case-strip"
        style={{
          background: `linear-gradient(135deg, ${industry.color}18, ${industry.color}08)`,
          borderColor: `${industry.color}28`,
        }}
      >
        <div className="ip__case-strip-left">
          <span className="ip__case-strip-label">Impact Highlight</span>
          <p className="ip__case-strip-text">{industry.caseStudy.detail}</p>
        </div>
        <div className="ip__case-strip-metric" style={{ color: industry.color }}>
          {industry.caseStudy.metric}
        </div>
      </div>

      {/* ── OTHER INDUSTRIES ── */}
      <section className="ip__others" aria-labelledby="ip-others-heading">
        <div className="ip__others-header">
          <span className="ip__section-label">
            <span className="ip__section-label-line" aria-hidden="true" />
            Explore More
          </span>
          <h2 className="ip__others-title" id="ip-others-heading">Other Industries We Serve</h2>
        </div>

        <div className="ip__others-grid" role="list">
          {otherIndustries.map((ind) => {
            const IndIcon = ind.Icon;
            return (
              <button
                key={ind.id}
                role="listitem"
                className="ip__other-card"
                style={{ "--card-accent": ind.color }}
                onClick={() => navigate(`/industries/${ind.id}`)}
                aria-label={`Explore ${ind.title}`}
              >
                <span
                  className="ip__other-card-icon"
                  aria-hidden="true"
                  style={{ color: ind.color, background: `${ind.color}15` }}
                >
                  <IndIcon />
                </span>
                <span className="ip__other-card-info">
                  <span className="ip__other-card-label" style={{ color: ind.color }}>{ind.label}</span>
                  <span className="ip__other-card-title">{ind.title}</span>
                </span>
                <span className="ip__other-card-arrow" aria-hidden="true">›</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="ip__cta-banner">
        <div className="ip__cta-banner-content">
          <h2 className="ip__cta-banner-title">
            Ready to transform your{" "}
            <span style={{ color: industry.color }}>{industry.label}</span> business?
          </h2>
          <p className="ip__cta-banner-desc">
            Let's build something extraordinary together. Talk to our industry experts today.
          </p>
          <div className="ip__cta-banner-actions">
            {/* ── START A CONVERSATION ── */}
            <button
              className="ip__cta-banner-btn ip__cta-banner-btn--primary"
              style={{ background: `linear-gradient(135deg, ${industry.color}, ${industry.color}cc)` }}
              onClick={() => setConversationOpen(true)}
            >
              Start a Conversation
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* ── DOWNLOAD BROCHURE ── */}
            <button
              className="ip__cta-banner-btn ip__cta-banner-btn--outline"
              style={{ borderColor: `${industry.color}55`, color: industry.color }}
              onClick={openBrochure}
            >
              Download Brochure
            </button>
          </div>
        </div>
        <div className="ip__cta-banner-visual" aria-hidden="true">
          <div
            className="ip__cta-banner-icon"
            style={{ color: industry.color, background: `${industry.color}12` }}
          >
            <Icon />
          </div>
        </div>
      </div>

      {/* ══════════ POPUPS ══════════ */}

      {/* Get a Free Consultation */}
      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        industry={industry.label}
      />

      {/* Start a Conversation */}
      <ConversationPopup
        isOpen={conversationOpen}
        onClose={() => setConversationOpen(false)}
        industry={industry.label}
        color={industry.color}
      />

      {/* View Case Studies / Download Brochure */}
      <BrochurePopup
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        mode={brochureMode}
        industry={industry.label}
        color={industry.color}
      />
    </div>
    <Footer />
    </>
  );
};

export default IndustriesPage;