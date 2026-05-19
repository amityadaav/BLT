
import React, { useState, useEffect, useRef } from "react";
import "./WhyChooseUs.css";

const steps = [
  {
    side: "right",
    title: "Discovery",
    number: "01",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    alt: "SoulCloud Tech project discovery — understanding client goals and requirements",
    desc: "We listen first. We dig into your goals, your users, and your challenges before proposing a single solution — asking the right questions before writing a line of code.",
  },
  {
    side: "left",
    title: "Project Planning",
    number: "02",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    alt: "SoulCloud Tech project planning — milestones, timelines and roadmap",
    desc: "We map out a clear roadmap — scope, milestones, and timelines — so there are no surprises and no wasted time. You always know what's next.",
  },
  {
    side: "right",
    title: "Execute Plan",
    number: "03",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    alt: "SoulCloud Tech executing digital product development with precision",
    desc: "Our team executes with focus and transparency. You get regular updates, open communication, and a team that genuinely cares about the outcome.",
  },
  {
    side: "left",
    title: "Deliver Project",
    number: "04",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80",
    alt: "SoulCloud Tech delivering final digital product on time with high quality",
    desc: "We ship clean, tested, and on time — then stay available to support and scale with you beyond launch. Quality is non-negotiable.",
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="approach"
      className={`why ${inView ? "why--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="why-heading"
    >
      <div className="why__bg" aria-hidden="true" />
      <div className="why__swirl" aria-hidden="true">
        <svg viewBox="0 0 120 200" fill="none">
          <path
            d="M100 10 C60 10, 20 40, 20 80 C20 120, 60 140, 90 120 C120 100, 110 60, 80 50 C50 40, 30 60, 40 90"
            stroke="#c8c5f5" strokeWidth="1.5" fill="none"
          />
        </svg>
      </div>

      <div className="why__grid">
        {/* LEFT */}
        <div className="why__left">
          <div className="why__header">
            <span className="why__label">
              <span className="why__label-line" aria-hidden="true" />
              Our Approach
            </span>
            <h2 className="why__title" id="why-heading">How We Work</h2>
            <p className="why__subtitle">
              A proven four-step process that takes your idea from concept to a
              live, high-quality digital product — on time, every time.
            </p>
          </div>

          <div className="why__image-wrap" aria-live="polite">
            <img
              key={activeIndex}
              src={steps[activeIndex].image}
              alt={steps[activeIndex].alt}
              className="why__image"
              loading="lazy"
              width="800"
              height="600"
              decoding="async"
            />
            {/* Step number overlay */}
            <div className="why__image-badge" aria-hidden="true">
              <span className="why__image-badge-num">{steps[activeIndex].number}</span>
              <span className="why__image-badge-label">{steps[activeIndex].title}</span>
            </div>
          </div>
        </div>

        {/* RIGHT — TIMELINE */}
        <div className="why__right">
          <div className="why__timeline">
            <div className="why__line" aria-hidden="true" />

            {steps.map((step, i) => (
              <div
                key={i}
                className={`why__row why__row--${step.side} ${i === activeIndex ? "why__row--active" : ""}`}
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`Step ${step.number}: ${step.title}`}
                onKeyDown={(e) => e.key === "Enter" && setActiveIndex(i)}
              >
                <div className="why__content">
                  <div className="why__step-top">
                    <span className="why__step-num">{step.number}</span>
                    <h3 className="why__step-title">{step.title}</h3>
                  </div>
                  <p className="why__step-desc">{step.desc}</p>
                </div>
                <div className={`why__dot ${i === activeIndex ? "why__dot--active" : ""}`} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why__diamonds" aria-hidden="true">
        <span className="why__diamond">◆</span>
        <span className="why__diamond">◆</span>
      </div>
    </section>
  );
};

export default WhyChooseUs;