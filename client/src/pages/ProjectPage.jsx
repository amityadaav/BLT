import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProjectDetails.css";

/* ── Constants ────────────────────────────────────────────── */
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

/* ── Project Data ────────────────────────────────────────── */
const PROJECT_DATA = {
  "ecommerce-platform": {
    title: "Enterprise E-Commerce Platform",
    client: "Fashion Retail Giant",
    category: "Web Development",
    duration: "6 months",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
    overview: "A scalable, high-performance e-commerce platform handling 100,000+ daily active users. The solution includes advanced search, personalized recommendations, and seamless checkout experience.",
    challenge: "The client needed to migrate from a legacy monolithic system to a modern microservices architecture while maintaining 99.9% uptime during the transition.",
    solution: "We built a headless e-commerce platform with React frontend, Node.js microservices, and real-time inventory management. Implemented CI/CD pipelines for zero-downtime deployments.",
    results: [
      "300% increase in conversion rate",
      "50% faster page load times",
      "99.99% uptime achieved",
      "$2M additional revenue in first quarter",
    ],
    features: [
      "Real-time inventory tracking",
      "AI-powered product recommendations",
      "One-click checkout",
      "Advanced search & filtering",
      "Mobile-responsive design",
      "Analytics dashboard",
    ],
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    ],
  },
  "healthcare-app": {
    title: "Telehealth Mobile Application",
    client: "MediCare Health Systems",
    category: "Mobile Development",
    duration: "8 months",
    technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "PostgreSQL"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    overview: "A comprehensive telehealth platform connecting patients with healthcare providers through video consultations, prescriptions, and health records management.",
    challenge: "Creating a HIPAA-compliant platform with secure video calls, real-time chat, and electronic health records integration while maintaining excellent user experience.",
    solution: "Developed a cross-platform mobile app with end-to-end encryption, compliant video conferencing, and seamless EHR integration. Implemented role-based access control for security.",
    results: [
      "150,000+ active users",
      "40% reduction in patient wait times",
      "98% patient satisfaction rate",
      "24/7 healthcare access",
    ],
    features: [
      "Secure video consultations",
      "Digital prescriptions",
      "Health records access",
      "Real-time chat",
      "Appointment scheduling",
      "Payment processing",
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    ],
  },
  "ai-analytics-dashboard": {
    title: "AI-Powered Analytics Dashboard",
    client: "Global Logistics Corp",
    category: "Data Analytics",
    duration: "4 months",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "BigQuery"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    overview: "Real-time analytics dashboard with predictive insights for logistics operations, helping optimize routes, reduce costs, and improve delivery times.",
    challenge: "Processing millions of data points in real-time and providing actionable insights to operations teams across multiple time zones.",
    solution: "Built a scalable data pipeline with machine learning models for demand forecasting and route optimization. Created interactive visualizations for easy decision-making.",
    results: [
      "25% reduction in fuel costs",
      "30% improvement in delivery times",
      "$5M annual savings",
      "Real-time fleet tracking",
    ],
    features: [
      "Predictive analytics",
      "Real-time monitoring",
      "Custom reports",
      "Interactive dashboards",
      "Automated alerts",
      "Data export tools",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    ],
  },
  "fintech-platform": {
    title: "Digital Banking Platform",
    client: "NeoBank Financial",
    category: "Fintech",
    duration: "10 months",
    technologies: ["Java", "Spring Boot", "React", "Kubernetes", "Oracle"],
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
    overview: "A modern digital banking platform offering personal and business accounts, investments, loans, and financial planning tools.",
    challenge: "Meeting strict financial regulations while providing a seamless, consumer-grade user experience and handling high-volume transactions.",
    solution: "Implemented microservices architecture with bank-level security, real-time fraud detection, and intuitive mobile-first design. Achieved PCI-DSS compliance.",
    results: [
      "500,000+ accounts opened",
      "$100M+ transactions processed",
      "99.999% uptime",
      "45% lower operational costs",
    ],
    features: [
      "Multi-factor authentication",
      "Real-time transactions",
      "Investment tracking",
      "Budget planning tools",
      "Bill payments",
      "Mobile check deposit",
    ],
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8561b0?w=600&q=80",
    ],
  },
};

/* ── Call form validation ─────────────────────────────────── */
function validateCall(form) {
  const errors = {};
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[0-9]{10}$/;
  const today = new Date().toISOString().split("T")[0];

  if (!form.name.trim()) {
    errors.name = "Name is required";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRe.test(form.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!phoneRe.test(form.phone)) {
    errors.phone = "Enter a valid 10-digit phone number";
  }

  if (!form.date) {
    errors.date = "Please select a date";
  } else if (form.date < today) {
    errors.date = "Date must be today or later";
  }

  if (!form.time) errors.time = "Please select a time";

  return errors;
}

const INITIAL_CALL = { name: "", email: "", phone: "", date: "", time: "" };

/* ── Main Component ────────────────────────────────────────── */
export default function ProjectPage() {
  const { project } = useParams();
  const navigate = useNavigate();

  const data = PROJECT_DATA[project];

  const [pageLoading, setPageLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [callForm, setCallForm] = useState(INITIAL_CALL);
  const [callErrors, setCallErrors] = useState({});
  const [callSending, setCallSending] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(timer);
  }, [project]);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCallForm((prev) => ({ ...prev, [name]: value }));
    if (callErrors[name]) setCallErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCallSubmit = async (e) => {
    e.preventDefault();
    const errs = validateCall(callForm);
    if (Object.keys(errs).length > 0) {
      setCallErrors(errs);
      return;
    }

    setCallSending(true);
    try {
      const res = await fetch(`${API_BASE}/api/schedule-call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...callForm, project: project, type: "project" }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message ?? "Server error");

      setOpenModal(false);
      setCallForm(INITIAL_CALL);
      setCallErrors({});
      alert("✅ Call scheduled! We'll send a confirmation to your email.");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setCallSending(false);
    }
  };

  if (!pageLoading && !data) {
    return (
      <>
        <Navbar />
        <div className="project-page">
          <div className="project-not-found">
            <h2>🔍 Project Not Found</h2>
            <p>The project you're looking for doesn't exist or has been moved.</p>
            <button onClick={() => navigate("/")} className="project-btn project-btn--primary">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (pageLoading) {
    return (
      <>
        <Navbar />
        <div className="project-page">
          <div className="project-hero">
            <div className="project-hero__content">
              <div className="skeleton" style={{ height: 40, width: "60%", marginBottom: 16, borderRadius: 8 }} />
              <div className="skeleton" style={{ height: 20, width: "30%", marginBottom: 12, borderRadius: 6 }} />
              <div className="skeleton" style={{ height: 20, width: "80%", marginBottom: 28, borderRadius: 6 }} />
              <div className="skeleton" style={{ height: 46, width: 160, borderRadius: 8 }} />
            </div>
            <div className="project-hero__image">
              <div className="skeleton" style={{ height: 400, width: "100%", borderRadius: 12 }} />
            </div>
          </div>
          <div className="project-container">
            <div className="skeleton" style={{ height: 32, width: 200, marginBottom: 24, borderRadius: 6 }} />
            <div className="project-stats">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="skeleton" style={{ height: 100, borderRadius: 12 }} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Navbar />

      <div className="project-page">
        {/* Hero Section */}
        <section className="project-hero">
          <div className="project-hero__content">
            <span className="project-category">{data.category}</span>
            <h1>{data.title}</h1>
            <p className="project-client">Client: {data.client}</p>
            <p className="project-duration">Duration: {data.duration}</p>
            <button
              className="project-btn project-btn--primary"
              onClick={() => setOpenModal(true)}
            >
              Request Similar Project
            </button>
          </div>
          <div className="project-hero__image">
            <img src={data.heroImage} alt={data.title} loading="lazy" />
          </div>
        </section>

        <div className="project-container">
          {/* Overview Section */}
          <section className="project-section">
            <h2>Project Overview</h2>
            <p>{data.overview}</p>
          </section>

          {/* Challenge & Solution Section */}
          <div className="project-grid-2">
            <section className="project-section">
              <h2>The Challenge</h2>
              <p>{data.challenge}</p>
            </section>
            <section className="project-section">
              <h2>The Solution</h2>
              <p>{data.solution}</p>
            </section>
          </div>

          {/* Results Section */}
          <section className="project-section">
            <h2>Key Results</h2>
            <div className="project-stats">
              {data.results.map((result, idx) => (
                <div className="project-stat-card" key={idx}>
                  <div className="project-stat-icon">📈</div>
                  <p>{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="project-section">
            <h2>Key Features</h2>
            <div className="project-features">
              {data.features.map((feature, idx) => (
                <div className="project-feature" key={idx}>
                  <span className="project-feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="project-section">
            <h2>Technologies Used</h2>
            <div className="project-tech">
              {data.technologies.map((tech, idx) => (
                <span className="project-tech-tag" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          {data.images && data.images.length > 0 && (
            <section className="project-section">
              <h2>Project Gallery</h2>
              <div className="project-gallery">
                <div className="project-gallery-main">
                  <img src={data.images[activeImage]} alt={`Gallery ${activeImage + 1}`} />
                </div>
                <div className="project-gallery-thumbs">
                  {data.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`project-gallery-thumb ${activeImage === idx ? "active" : ""}`}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="project-cta">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together</p>
            <div className="project-cta-buttons">
              <button onClick={() => navigate("/#contact")} className="project-btn project-btn--primary">
                Start a Project
              </button>
              <button onClick={() => setOpenModal(true)} className="project-btn project-btn--outline">
                Schedule a Call
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Schedule Call Modal */}
      {openModal && (
        <div className="popup-overlay" onClick={() => setOpenModal(false)}>
          <div
            className="call-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a call"
          >
            <div className="call-modal__header">
              <div>
                <h3>Schedule a Call</h3>
                <p>Discuss your project requirements</p>
              </div>
              <button
                className="call-modal__close"
                onClick={() => setOpenModal(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCallSubmit} noValidate className="call-modal__form">
              <div className="call-modal__field">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={callForm.name}
                  onChange={handleChange}
                  required
                />
                {callErrors.name && <p className="form-error">{callErrors.name}</p>}
              </div>

              <div className="call-modal__field">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={callForm.email}
                  onChange={handleChange}
                  required
                />
                {callErrors.email && <p className="form-error">{callErrors.email}</p>}
              </div>

              <div className="call-modal__field">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={callForm.phone}
                  onChange={handleChange}
                  required
                />
                {callErrors.phone && <p className="form-error">{callErrors.phone}</p>}
              </div>

              <div className="call-modal__row">
                <div className="call-modal__field">
                  <input
                    name="date"
                    type="date"
                    min={today}
                    value={callForm.date}
                    onChange={handleChange}
                    required
                  />
                  {callErrors.date && <p className="form-error">{callErrors.date}</p>}
                </div>
                <div className="call-modal__field">
                  <input
                    name="time"
                    type="time"
                    value={callForm.time}
                    onChange={handleChange}
                    required
                  />
                  {callErrors.time && <p className="form-error">{callErrors.time}</p>}
                </div>
              </div>

              <button type="submit" disabled={callSending} className="call-modal__submit">
                {callSending ? (
                  <>
                    <span className="spinner" aria-hidden="true"></span> Scheduling…
                  </>
                ) : (
                  "Confirm Call"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}