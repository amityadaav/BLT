import { Helmet } from 'react-helmet-async'
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import StartProjectPopup from "../components/contact/StartProjectPopup";
import Footer from "../components/layout/Footer/Footer";
import "./ServicesPage.css";

/* ══════════════════════════════════════════
   SERVICE DATA  (single source of truth)
   ══════════════════════════════════════════ */
export const SERVICES_DATA = [
  {
    id: "data-ai",
    title: "Data & AI Intelligence",
    shortDesc: "Turn raw data into real decisions.",
    tagline: "Smarter insights. Faster decisions. Real impact.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    alt: "AI and machine learning data intelligence solutions",
    color: "#6c63ff",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 14V10M24 38V34M34 24H38M10 24H14" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    items: [
      "AI & Machine Learning Solutions",
      "Data Analytics & Visualization",
      "Predictive Intelligence",
      "Business Insights & Automation",
    ],
    details: {
      overview:
        "We transform raw, complex data into actionable intelligence that drives your business forward. From building ML pipelines to deploying predictive models in production, we deliver end-to-end AI solutions tailored to your domain.",
      whatWeDo: [
        {
          title: "Machine Learning & AI",
          desc: "Custom ML models, NLP pipelines, computer vision systems, and LLM integrations fine-tuned to your specific business context.",
        },
        {
          title: "Data Engineering",
          desc: "Scalable ETL pipelines, real-time data streams, data lake and warehouse architecture using modern tools like Spark, dbt, and Airflow.",
        },
        {
          title: "Analytics & BI",
          desc: "Interactive dashboards, KPI frameworks, and self-serve BI platforms built on Tableau, Metabase, or custom React-based tools.",
        },
        {
          title: "Predictive Intelligence",
          desc: "Demand forecasting, churn prediction, fraud detection, and recommendation engines that directly improve revenue and retention.",
        },
      ],
      process: ["Discovery & Data Audit", "Model Design", "Training & Validation", "Deployment", "Monitoring & Retraining"],
      stat1: "3x", stat1Label: "Faster decision cycles",
      stat2: "85%+", stat2Label: "Model accuracy",
      stat3: "40%", stat3Label: "Cost reduction via automation",
    },
  },
  {
    id: "cloud-infra",
    title: "Cloud & Infrastructure",
    shortDesc: "Reliable, secure, and built to scale.",
    tagline: "Infrastructure that never sleeps, never fails.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    alt: "Cloud architecture and DevOps infrastructure solutions",
    color: "#0ea5e9",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M16 30H34C38 30 40 27 40 24C40 21 38 18 34 18C33 14 30 12 26 12C22 12 19 14 18 18C14 18 12 21 12 24C12 27 14 30 16 30Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 30v6M24 30v6M28 30v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Cloud Architecture & Deployment",
      "DevOps & CI/CD Pipelines",
      "Scalable Infrastructure",
      "Security & Compliance",
    ],
    details: {
      overview:
        "We design, migrate, and manage cloud infrastructure that's secure, cost-optimised, and built to scale with your growth. From greenfield AWS setups to complex multi-cloud strategies, we've got every layer covered.",
      whatWeDo: [
        {
          title: "Cloud Architecture",
          desc: "AWS, GCP, and Azure infrastructure design using IaC (Terraform, CDK) — right-sized for your workload and budget.",
        },
        {
          title: "DevOps & CI/CD",
          desc: "Automated pipelines with GitHub Actions, GitLab CI, or Jenkins. Docker, Kubernetes orchestration, and zero-downtime deployments.",
        },
        {
          title: "Observability",
          desc: "End-to-end monitoring with Datadog, Grafana, or custom stacks — alerting, tracing, and logging that catches issues before users do.",
        },
        {
          title: "Security & Compliance",
          desc: "IAM hardening, secrets management, SOC 2 readiness, vulnerability scanning, and GDPR-compliant data flows.",
        },
      ],
      process: ["Infra Audit", "Architecture Design", "Migration / Setup", "CI/CD Rollout", "Ongoing Management"],
      stat1: "99.99%", stat1Label: "Uptime guarantee",
      stat2: "60%", stat2Label: "Infra cost savings",
      stat3: "2hr", stat3Label: "Avg deployment cycle",
    },
  },
  {
    id: "experience-design",
    title: "Experience Design",
    shortDesc: "Design that people love to use.",
    tagline: "Where empathy meets pixel-perfect craft.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    alt: "UX design and digital product experience design services",
    color: "#ec4899",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="22" r="2" fill="currentColor" />
        <circle cx="30" cy="22" r="2" fill="currentColor" />
        <path d="M18 29C20 32 28 32 30 29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Human-Centered Design",
      "Digital Product Experience",
      "UX Research & Strategy",
      "Brand & Interface Systems",
    ],
    details: {
      overview:
        "Great design is invisible — it just works. We combine deep user research with world-class visual craft to create interfaces that delight users, reduce friction, and drive measurable business outcomes.",
      whatWeDo: [
        {
          title: "UX Research",
          desc: "User interviews, usability testing, heuristic audits, and competitive analysis that ground every design decision in real user needs.",
        },
        {
          title: "Product Design",
          desc: "Wireframes, interactive prototypes, and pixel-perfect UI in Figma — fully spec'd and ready for engineering handoff.",
        },
        {
          title: "Design Systems",
          desc: "Scalable component libraries and design tokens that keep your product consistent across every screen and touchpoint.",
        },
        {
          title: "Brand & Identity",
          desc: "Logo, colour, type, motion — a complete visual language that communicates who you are before users read a single word.",
        },
      ],
      process: ["Research", "Define", "Ideate", "Prototype", "Test & Iterate"],
      stat1: "2.8x", stat1Label: "Higher conversion",
      stat2: "54%", stat2Label: "Reduction in support tickets",
      stat3: "4.9★", stat3Label: "Average client satisfaction",
    },
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    shortDesc: "Code that scales. Products that last.",
    tagline: "Built for today. Architected for tomorrow.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    alt: "Scalable web platform and product engineering services",
    color: "#22c55e",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M18 16L10 24L18 32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M30 16L38 24L30 32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <path d="M22 10l4 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    items: [
      "Scalable Web Platforms",
      "Cross-Platform Applications",
      "Microservices Architecture",
      "Performance Optimization",
    ],
    details: {
      overview:
        "We engineer digital products from the ground up — clean architecture, rigorous code reviews, and CI/CD from day one. Whether it's a startup MVP or an enterprise-scale platform, we ship fast without cutting corners.",
      whatWeDo: [
        {
          title: "Full-Stack Web",
          desc: "React, Next.js, Node.js, Python — modern stacks chosen for your use case, not ours. APIs, auth, and everything in between.",
        },
        {
          title: "Mobile Applications",
          desc: "React Native and Flutter apps that feel native on both iOS and Android, with shared codebases that ship faster.",
        },
        {
          title: "Microservices & APIs",
          desc: "Domain-driven service architecture, REST & GraphQL APIs, event-driven systems, and robust third-party integrations.",
        },
        {
          title: "Performance & Scale",
          desc: "Caching strategies, database optimisation, CDN setup, and load testing that keeps your product fast under any traffic spike.",
        },
      ],
      process: ["Architecture Planning", "Agile Sprints", "Code Review", "QA & Testing", "Launch & Support"],
      stat1: "50+", stat1Label: "Products shipped",
      stat2: "< 100ms", stat2Label: "Average API response",
      stat3: "0", stat3Label: "Critical bugs at launch",
    },
  },
];

/* ── tiny helpers ── */
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ width: 15, height: 15, flexShrink: 0 }}>
    <path d="M3 8l3.5 3.5L13 5" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ width: 14, height: 14 }}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════ */
const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  // Active service id from navigation state OR first service
  const [activeId, setActiveId] = useState(
    location.state?.selectedService || SERVICES_DATA[0]?.id || "data-ai"
  );

  const detailRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // If navigated with state (from homepage cards), set active + clear state
  useEffect(() => {
    if (location.state?.selectedService) {
      setActiveId(location.state.selectedService);
      // Clear state so browser back doesn't re-trigger
      navigate("/services", { replace: true, state: {} });
      // Small delay then scroll to detail panel
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [location.state?.selectedService, navigate]);

  // IntersectionObserver for detail panel entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (detailRef.current) observer.observe(detailRef.current);
    return () => {
      if (detailRef.current) observer.unobserve(detailRef.current);
      observer.disconnect();
    };
  }, [activeId]);

  // Reset inView when switching tabs so animation re-plays
  const handleTabChange = (id) => {
    setActiveId(id);
    setInView(false);
    setTimeout(() => setInView(true), 50);
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const active = SERVICES_DATA.find(s => s.id === activeId) || SERVICES_DATA[0];

  // Handle popup close
  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
    <Helmet>
  <title>Software &amp; IT Services in Bengaluru | Bluelith Technology</title>
  <meta name="description" content="Bluelith Technology offers AI development, web app development, mobile app development, UI/UX design, and product engineering services in Bengaluru for startups and enterprises worldwide." />
  <meta name="keywords" content="software services Bengaluru, IT services Bangalore, AI development India, web development company Bengaluru, mobile app services India, UI UX design Bengaluru, product engineering India" />
  <link rel="canonical" href="https://www.bluelith.in/services" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.bluelith.in/services" />
  <meta property="og:title" content="Software &amp; IT Services in Bengaluru | Bluelith Technology" />
  <meta property="og:description" content="AI, web, mobile, design and engineering services from Bengaluru's top software company. Built for startups and enterprises worldwide." />
  <meta property="og:image" content="https://www.bluelith.in/og-services.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Software &amp; IT Services in Bengaluru | Bluelith Technology" />
  <meta name="twitter:description" content="AI, web, mobile, design and product engineering from Bluelith Technology — Bengaluru's trusted software company." />
  <meta name="twitter:image" content="https://www.bluelith.in/og-services.jpg" />
</Helmet>

      <Navbar />

      <main className="sp" aria-label="SkyLith Technology Services">

        {/* ══ HERO ══ */}
        <header className="sp__hero">
          <div className="sp__hero-bg" style={{ backgroundImage: `url(${active.img})` }} aria-hidden="true" />
          <div className="sp__hero-overlay" aria-hidden="true" />
          <div className="sp__hero-content">
            <p className="sp__hero-label">What We Do</p>
            <h1 className="sp__hero-title">
              Smart Solutions.<br />
              <span>Real Results.</span>
            </h1>
            <p className="sp__hero-sub">
              End-to-end digital services — AI, cloud, design, and engineering —
              all under one roof, with zero compromise on quality.
            </p>
          </div>
        </header>

        {/* ══ SERVICE TABS ══ */}
        <nav className="sp__tabs" aria-label="Service categories" role="tablist">
          {SERVICES_DATA.map((svc) => (
            <button
              key={svc.id}
              role="tab"
              aria-selected={activeId === svc.id}
              aria-controls={`sp-panel-${svc.id}`}
              id={`sp-tab-${svc.id}`}
              className={`sp__tab${activeId === svc.id ? " sp__tab--active" : ""}`}
              style={{ "--accent": svc.color }}
              onClick={() => handleTabChange(svc.id)}
              type="button"
            >
              <span className="sp__tab-icon">{svc.icon}</span>
              <span className="sp__tab-label">{svc.title}</span>
            </button>
          ))}
        </nav>

        {/* ══ DETAIL PANEL ══ */}
        {active && (
          <div
            ref={detailRef}
            id={`sp-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`sp-tab-${active.id}`}
            className={`sp__detail${inView ? " sp__detail--visible" : ""}`}
            style={{ "--accent": active.color }}
            itemScope
            itemType="https://schema.org/Service"
          >
            <meta itemProp="provider" content="SkyLith Technology" />
            <meta itemProp="name" content={active.title} />

            {/* ── LEFT: content ── */}
            <div className="sp__detail-content">

              {/* badge + title */}
              <div className="sp__detail-top">
                <span className="sp__detail-icon">{active.icon}</span>
                <span className="sp__detail-badge">{active.shortDesc}</span>
              </div>

              <h2 className="sp__detail-title" itemProp="name">{active.title}</h2>
              <p className="sp__detail-tagline">{active.tagline}</p>
              <p className="sp__detail-overview" itemProp="description">{active.details.overview}</p>

              {/* core items checklist */}
              <ul className="sp__detail-items" aria-label="Included services">
                {active.items.map(item => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              {/* stats row */}
              <div className="sp__stats" aria-label="Key results">
                {[
                  { val: active.details.stat1, lbl: active.details.stat1Label },
                  { val: active.details.stat2, lbl: active.details.stat2Label },
                  { val: active.details.stat3, lbl: active.details.stat3Label },
                ].map(s => (
                  <div key={s.lbl} className="sp__stat">
                    <strong>{s.val}</strong>
                    <span>{s.lbl}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="sp__cta"
                type="button"
                onClick={() => { 
                  setMenuOpen(false); 
                  setPopupOpen(true);
                }}
                aria-label={`Start a project in ${active.title}`}
              >
                Start a Project <ArrowIcon />
              </button>
            </div>

            {/* ── RIGHT: what-we-do cards + process ── */}
            <div className="sp__detail-aside">

              {/* What we do cards */}
              <div className="sp__wwd" aria-label="What we do">
                {active.details.whatWeDo.map((w, i) => (
                  <article
                    key={w.title}
                    className="sp__wwd-card"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="sp__wwd-num" aria-hidden="true">0{i + 1}</div>
                    <div className="sp__wwd-body">
                      <h3 className="sp__wwd-title">{w.title}</h3>
                      <p className="sp__wwd-desc">{w.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Process steps */}
              <div className="sp__process" aria-label="Our process">
                <p className="sp__process-label">Our Process</p>
                <ol className="sp__process-steps">
                  {active.details.process.map((step, i) => (
                    <li key={step} className="sp__process-step">
                      <span className="sp__process-num">{i + 1}</span>
                      <span className="sp__process-text">{step}</span>
                      {i < active.details.process.length - 1 && (
                        <span className="sp__process-line" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* ══ ALL SERVICES GRID (other services) ══ */}
        <section className="sp__other" aria-label="Other services">
          <div className="sp__other-header">
            <span className="sp__other-label">
              <span aria-hidden="true" />
              Explore More
            </span>
            <h2 className="sp__other-title">Our Other Services</h2>
          </div>

          <div className="sp__other-grid" role="list">
            {SERVICES_DATA.filter(s => s.id !== activeId).map((svc, i) => (
              <article
                key={svc.id}
                role="listitem"
                className="sp__other-card"
                style={{ "--accent": svc.color, animationDelay: `${i * 80}ms` }}
                onClick={() => handleTabChange(svc.id)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleTabChange(svc.id); } }}
                aria-label={`Explore ${svc.title}`}
                itemScope
                itemType="https://schema.org/Offer"
              >
                <meta itemProp="name" content={svc.title} />
                <div
                  className="sp__other-card-bg"
                  style={{ backgroundImage: `url(${svc.img})` }}
                  aria-hidden="true"
                />
                <div className="sp__other-card-overlay" aria-hidden="true" />
                <div className="sp__other-card-icon">{svc.icon}</div>
                <p className="sp__other-card-short">{svc.shortDesc}</p>
                <h3 className="sp__other-card-title" itemProp="name">{svc.title}</h3>
                <ul className="sp__other-card-list" aria-label={`${svc.title} highlights`}>
                  {svc.items.slice(0, 3).map(item => (
                    <li key={item}>
                      <span aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="sp__other-card-cta" aria-hidden="true">
                  Explore More <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* FIXED: Changed from 'open' to 'isOpen' to match component props */}
      <StartProjectPopup isOpen={popupOpen} onClose={handlePopupClose} />
      <Footer />
    </>
  );
};

export default ServicesPage;