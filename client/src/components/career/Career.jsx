
import React, { useState, useEffect } from "react";
import "./Career.css";
import {
  Rocket, Lightbulb, Users, Scale, Target, TrendingUp,
  MapPin, Clock, Briefcase, ChevronRight, X, Send,
  Building2, CheckCircle2, ArrowUpRight,
  Code2, Palette, BarChart3, ClipboardList,
  HelpCircle, Mail, Phone, User, Link, FileText, MessageSquare,
  Award, Zap, AlertCircle, Loader2,
} from "lucide-react";

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const API_URL = `${BASE_URL}/api/career`;

const DEPT_ICONS = {
  Engineering: Code2,
  Design: Palette,
  Marketing: BarChart3,
  Operations: ClipboardList,
};

const CULTURE_ITEMS = [
  { Icon: Rocket,     title: "Innovation First",          desc: "Work with cutting-edge technologies and push creative boundaries on every project we take on." },
  { Icon: Lightbulb,  title: "Learning Culture",           desc: "Continuous development opportunities, curated workshops, and a dedicated professional growth budget." },
  { Icon: Users,      title: "Collaborative Environment",  desc: "Open communication, genuine team synergy, and a psychologically safe, supportive atmosphere." },
  { Icon: Scale,      title: "Work-Life Balance",          desc: "Flexible hours, remote-friendly policies, and a culture that respects your life outside work." },
  { Icon: Target,     title: "Impactful Work",             desc: "Contribute to meaningful projects that move the needle for clients across diverse industries." },
  { Icon: TrendingUp, title: "Growth Opportunities",       desc: "Transparent career paths, mentorship programs, and genuine leadership development tracks." },
];

const JOB_OPENINGS = [
  {
    id: 1, title: "Senior Frontend Developer", department: "Engineering",
    location: "Bengaluru, India", type: "Full-time", experience: "5+ years",
    description: "We're looking for an experienced Frontend Developer who excels at React, modern JavaScript, and creating exceptional user experiences.",
    responsibilities: ["Build responsive web applications using React.js", "Collaborate with designers to implement pixel-perfect designs", "Optimize applications for maximum performance", "Mentor junior developers and conduct code reviews", "Stay updated with emerging frontend technologies"],
    requirements: ["5+ years of experience in frontend development", "Expert proficiency in React.js and its ecosystem", "Strong understanding of JavaScript/TypeScript, HTML5, CSS3", "Experience with state management (Redux, Context API)", "Knowledge of modern frontend build pipelines and tools", "Excellent problem-solving and communication skills"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Flexible working hours", "Remote work options", "Learning & development budget", "Yearly team retreats"],
  },
  {
    id: 2, title: "UI/UX Designer", department: "Design",
    location: "Bengaluru, India", type: "Full-time", experience: "3+ years",
    description: "Join our creative team to design beautiful, intuitive interfaces that delight users and solve complex problems with elegant simplicity.",
    responsibilities: ["Create user-centered designs based on research and data", "Develop wireframes, prototypes, and high-fidelity mockups", "Collaborate with developers to ensure design implementation", "Conduct user research and usability testing", "Maintain and evolve design systems"],
    requirements: ["3+ years of UI/UX design experience", "Proficiency in Figma, Adobe XD, or similar tools", "Strong portfolio showcasing design thinking process", "Understanding of user-centered design principles", "Experience with responsive and mobile-first design", "Knowledge of HTML/CSS is a plus"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Creative work environment", "Latest design tools and equipment", "Conference and workshop budget", "Collaborative team culture"],
  },
  {
    id: 3, title: "Backend Developer", department: "Engineering",
    location: "Bengaluru, India", type: "Full-time", experience: "4+ years",
    description: "Seeking a skilled Backend Developer to build scalable APIs, robust server-side applications, and reliable data pipelines.",
    responsibilities: ["Design and implement RESTful APIs and microservices", "Optimize database queries and data structures", "Ensure application security and data protection", "Integrate third-party services and APIs", "Write clean, maintainable, and well-documented code"],
    requirements: ["4+ years of backend development experience", "Proficiency in Node.js, Python, or Java", "Experience with PostgreSQL, MongoDB, or similar databases", "Knowledge of cloud platforms (AWS, GCP, or Azure)", "Understanding of version control (Git)", "Strong analytical and problem-solving skills"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Flexible working hours", "Remote work options", "Learning & development budget", "Yearly team retreats"],
  },
  {
    id: 4, title: "Digital Marketing Specialist", department: "Marketing",
    location: "Bengaluru, India", type: "Full-time", experience: "3+ years",
    description: "Drive our digital presence and grow our brand through strategic, data-driven marketing initiatives across all channels.",
    responsibilities: ["Develop and execute digital marketing strategies", "Manage SEO/SEM campaigns and analyze performance", "Create engaging content for social media platforms", "Monitor and report on marketing metrics", "Collaborate with design team for marketing materials"],
    requirements: ["3+ years of digital marketing experience", "Proven track record of successful campaigns", "Expertise in SEO, SEM, and social media marketing", "Experience with Google Analytics and marketing tools", "Excellent written and verbal communication skills", "Creative thinking and data-driven approach"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Performance bonuses", "Flexible working hours", "Professional development opportunities", "Creative work environment"],
  },
  {
    id: 5, title: "Project Manager", department: "Operations",
    location: "Bengaluru, India", type: "Full-time", experience: "6+ years",
    description: "Lead cross-functional teams to deliver exceptional digital products on time, within scope, and on budget — every time.",
    responsibilities: ["Manage end-to-end project delivery lifecycle", "Coordinate with clients and internal stakeholders", "Create and maintain project timelines and budgets", "Identify and mitigate project risks", "Lead agile ceremonies and team meetings"],
    requirements: ["6+ years of project management experience", "PMP, Scrum Master, or similar certification", "Experience with agile methodologies", "Strong leadership and communication skills", "Technical background is a plus", "Excellent organizational abilities"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Leadership development programs", "Flexible working hours", "Performance bonuses", "Yearly team retreats"],
  },
  {
    id: 6, title: "DevOps Engineer", department: "Engineering",
    location: "Bengaluru, India", type: "Full-time", experience: "4+ years",
    description: "Build and maintain cloud infrastructure and CI/CD pipelines to ensure reliable, scalable, and secure deployments at speed.",
    responsibilities: ["Design and maintain CI/CD pipelines", "Manage cloud infrastructure (AWS/GCP/Azure)", "Implement monitoring and alerting systems", "Automate deployment processes", "Ensure system security and compliance"],
    requirements: ["4+ years of DevOps experience", "Experience with Docker and Kubernetes", "Proficiency in AWS, GCP, or Azure", "Knowledge of infrastructure as code (Terraform, CloudFormation)", "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)", "Strong scripting skills (Bash, Python)"],
    benefits: ["Competitive salary package", "Health insurance coverage", "Flexible working hours", "Remote work options", "Learning & development budget", "Latest tools and technologies"],
  },
];

const FAQ_ITEMS = [
  { q: "What is the interview process like?",   a: "Our process typically includes an initial screening, a technical assessment, a team interview, and a final conversation with leadership. We aim to make it thorough but efficient — usually 2–3 weeks end-to-end." },
  { q: "Do you offer remote work options?",     a: "Yes. We offer flexible arrangements including fully remote, hybrid, and in-office — based on role requirements and personal preference. Most roles are hybrid-friendly." },
  { q: "What benefits do you provide?",         a: "Competitive compensation, comprehensive health insurance, a dedicated learning budget, flexible hours, generous PTO, and clear paths for professional growth." },
  { q: "How soon can I expect to hear back?",   a: "We review applications within 5–7 business days. If shortlisted, our HR team will reach out to schedule the next steps promptly." },
];

const INIT_FORM = {
  fullName: "", email: "", phone: "", position: "",
  experience: "", currentCompany: "", portfolio: "", message: "", resume: null,
};

export default function Career() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedJob,  setSelectedJob]  = useState(null);
  const [formData,     setFormData]     = useState(INIT_FORM);
  const [loading,      setLoading]      = useState(false);
  const [status,       setStatus]       = useState({ type: "", msg: "" });

  const departments  = ["all", ...new Set(JOB_OPENINGS.map(j => j.department))];
  const filteredJobs = activeFilter === "all"
    ? JOB_OPENINGS
    : JOB_OPENINGS.filter(j => j.department === activeFilter);

  const handleChange = e =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = e =>
    setFormData(p => ({ ...p, resume: e.target.files[0] || null }));

  /* ── REAL API SUBMIT ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      /* Build multipart/form-data — required because of the resume file */
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (val !== null && val !== undefined) fd.append(key, val);
      });

      const res  = await fetch(API_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          msg: data.message || "Application submitted! We'll review it and get back to you within 5–7 business days.",
        });
        setFormData(INIT_FORM);
        e.target.reset(); // clears the file input visually
      } else {
        setStatus({ type: "error", msg: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Server error. Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="career-page">

      {/* ── HERO ── */}
      <section className="career-hero">
        <div className="hero-grid" />
        <div className="container">
          <div className="hero__inner">
            <div className="hero__eyebrow"><Zap size={12} /> We're Hiring</div>
            <h1 className="hero__title">Shape the Future<br />of <em>Digital</em> Experiences</h1>
            <p className="hero__sub">
              Join a team that values craftsmanship, bold ideas, and genuine collaboration.
              Together we build products that make a lasting difference.
            </p>
            <div className="hero__stats">
              <div className="stat"><span className="stat__num">50+</span><span className="stat__label">Team Members</span></div>
              <div className="stat"><span className="stat__num">15+</span><span className="stat__label">Countries Served</span></div>
              <div className="stat"><span className="stat__num">200+</span><span className="stat__label">Projects Delivered</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section className="career-culture">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__tag"><Award size={13} /> Our Culture</div>
            <h2>Why Work With Us?</h2>
            <p>We foster an environment where creativity thrives and careers flourish at every level.</p>
          </div>
          <div className="culture-grid">
            {CULTURE_ITEMS.map(({ Icon, title, desc }) => (
              <div className="culture-card" key={title}>
                <div className="culture-icon"><Icon size={22} strokeWidth={1.75} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSITIONS ── */}
      <section className="career-positions">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__tag"><Briefcase size={13} /> Open Roles</div>
            <h2>Open Positions</h2>
            <p>Find the role that fits you best and join our growing team of makers.</p>
          </div>
          <div className="filters">
            {departments.map(d => (
              <button
                key={d}
                className={`filter-btn${activeFilter === d ? " active" : ""}`}
                onClick={() => setActiveFilter(d)}
              >
                {d === "all" ? "All Positions" : d}
              </button>
            ))}
          </div>
          <div className="jobs-grid">
            {filteredJobs.map(job => {
              const DIcon = DEPT_ICONS[job.department] || Briefcase;
              return (
                <div className="job-card" key={job.id}>
                  <div className="job-card__top">
                    <span className="job-dept"><DIcon size={12} /> {job.department}</span>
                    <span className="job-type-badge">{job.type}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <div className="job-exp">{job.experience} experience</div>
                  <div className="job-meta">
                    <span className="job-meta-item"><MapPin size={13} /> {job.location}</span>
                    <span className="job-meta-item"><Clock size={13} /> {job.type}</span>
                  </div>
                  <p className="job-desc">{job.description}</p>
                  <div className="job-card__footer">
                    <button className="view-btn" onClick={() => setSelectedJob(job)}>
                      View Details <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── JOB DETAIL MODAL ── */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelectedJob(null)}><X size={16} /></button>
            <div className="modal__head">
              <h2>{selectedJob.title}</h2>
              <div className="modal-badges">
                {[
                  [Building2, selectedJob.department],
                  [Briefcase, selectedJob.type],
                  [MapPin,    selectedJob.location],
                  [Clock,     selectedJob.experience],
                ].map(([Icon, label]) => (
                  <span className="modal-badge" key={label}><Icon size={12} /> {label}</span>
                ))}
              </div>
            </div>
            <div className="modal__body">
              <div className="job-sec">
                <h3>About the Role</h3>
                <p>{selectedJob.description}</p>
              </div>
              <div className="job-sec">
                <h3>Key Responsibilities</h3>
                <ul>{selectedJob.responsibilities.map((r, i) => <li key={i}><CheckCircle2 size={14} />{r}</li>)}</ul>
              </div>
              <div className="job-sec">
                <h3>Requirements</h3>
                <ul>{selectedJob.requirements.map((r, i) => <li key={i}><CheckCircle2 size={14} />{r}</li>)}</ul>
              </div>
              <div className="job-sec">
                <h3>What We Offer</h3>
                <ul>{selectedJob.benefits.map((b, i) => <li key={i}><CheckCircle2 size={14} />{b}</li>)}</ul>
              </div>
              <button
                className="apply-btn"
                onClick={() => {
                  /* Pre-fill position and scroll to form */
                  setFormData(p => ({ ...p, position: selectedJob.title }));
                  setSelectedJob(null);
                  setTimeout(() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" }), 100);
                }}
              >
                Apply for This Role <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── APPLICATION FORM ── */}
      <section id="application-form" className="career-application">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__tag"><Send size={13} /> Apply Now</div>
            <h2>Submit Your Application</h2>
            <p>Ready to join our team? Fill out the form below and we'll get back to you within a week.</p>
          </div>

          <div className="form-wrap">
            <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
              <div className="form-grid">

                <div className="field">
                  <label htmlFor="fullName">Full Name *</label>
                  <div className="field-wrap">
                    <User size={15} />
                    <input
                      id="fullName" name="fullName" type="text"
                      value={formData.fullName} onChange={handleChange}
                      placeholder="Your full name" required disabled={loading}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <div className="field-wrap">
                    <Mail size={15} />
                    <input
                      id="email" name="email" type="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="your@email.com" required disabled={loading}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="field-wrap">
                    <Phone size={15} />
                    <input
                      id="phone" name="phone" type="tel"
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210" required disabled={loading}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="currentCompany">Current Company</label>
                  <div className="field-wrap">
                    <Building2 size={15} />
                    <input
                      id="currentCompany" name="currentCompany" type="text"
                      value={formData.currentCompany} onChange={handleChange}
                      placeholder="Current employer (optional)" disabled={loading}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="portfolio">Portfolio / LinkedIn</label>
                  <div className="field-wrap">
                    <Link size={15} />
                    <input
                      id="portfolio" name="portfolio" type="url"
                      value={formData.portfolio} onChange={handleChange}
                      placeholder="https://yourportfolio.com" disabled={loading}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="position">Position *</label>
                  <div className="field-wrap">
                    <Briefcase size={15} />
                    <select
                      id="position" name="position"
                      value={formData.position} onChange={handleChange}
                      required disabled={loading}
                    >
                      <option value="">Select a position</option>
                      {JOB_OPENINGS.map(j => (
                        <option key={j.id} value={j.title}>{j.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="experience">Years of Experience *</label>
                  <div className="field-wrap">
                    <Clock size={15} />
                    <select
                      id="experience" name="experience"
                      value={formData.experience} onChange={handleChange}
                      required disabled={loading}
                    >
                      <option value="">Select range</option>
                      {["0-1","1-3","3-5","5-8","8+"].map(v => (
                        <option key={v} value={v}>{v} years</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="resume">Resume / CV *</label>
                  <div className="field-wrap">
                    <FileText size={15} />
                    <input
                      id="resume" name="resume" type="file"
                      onChange={handleFile}
                      accept=".pdf,.doc,.docx"
                      required disabled={loading}
                    />
                  </div>
                  <small>PDF, DOC, or DOCX — max 5 MB</small>
                </div>

                <div className="field span2">
                  <label htmlFor="message">Cover Letter</label>
                  <div className="field-wrap">
                    <MessageSquare size={15} />
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      rows={5}
                      placeholder="Tell us why you'd be a great fit for this role…"
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>

              {/* ── STATUS ── */}
              {status.msg && (
                <div className={`career-status career-status--${status.type}`} role="alert" aria-live="polite">
                  {status.type === "success"
                    ? <CheckCircle2 size={17} />
                    : <AlertCircle size={17} />}
                  {status.msg}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={loading} aria-busy={loading}>
                {loading ? (
                  <><Loader2 size={16} className="spin" /> Submitting…</>
                ) : (
                  <>Submit Application <Send size={15} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="career-faq">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__tag"><HelpCircle size={13} /> FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with us.</p>
          </div>
          <div className="faq-grid">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <div className="faq-card" key={i}>
                <div className="faq-card__icon"><HelpCircle size={18} strokeWidth={1.75} /></div>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
