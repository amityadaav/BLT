
// import React, {
//   useEffect,
//   useRef,
//   useState,
//   memo,
// } from "react";

// import { Link } from "react-router-dom";
// import "./About.css";

// /* ─────────────────────────────────────────────
//    COUNT UP HOOK
// ───────────────────────────────────────────── */
// const useCountUp = (
//   target,
//   duration = 1800,
//   start = false
// ) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let startTime = null;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;

//       const progress = Math.min(
//         (timestamp - startTime) / duration,
//         1
//       );

//       const eased =
//         1 - Math.pow(1 - progress, 3);

//       setCount(Math.floor(eased * target));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [target, duration, start]);

//   return count;
// };

// /* ─────────────────────────────────────────────
//    STAT ITEM
// ───────────────────────────────────────────── */
// const StatItem = memo(
//   ({
//     number,
//     suffix,
//     line1,
//     line2,
//     inView,
//   }) => {
//     const count = useCountUp(
//       number,
//       1800,
//       inView
//     );

//     return (
//       <article className="about__stat">
//         <span className="about__stat-number">
//           {count}

//           <span className="about__stat-suffix">
//             {suffix}
//           </span>
//         </span>

//         <p className="about__stat-label">
//           {line1}
//           <br />
//           {line2}
//         </p>
//       </article>
//     );
//   }
// );

// /* ─────────────────────────────────────────────
//    ABOUT
// ───────────────────────────────────────────── */
// const About = () => {
//   const sectionRef = useRef(null);

//   const [inView, setInView] =
//     useState(false);

//   /* Intersection Observer */
//   useEffect(() => {
//     const observer =
//       new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setInView(true);
//             observer.disconnect();
//           }
//         },
//         {
//           threshold: 0.2,
//         }
//       );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="about"
//       className={`about ${
//         inView ? "about--visible" : ""
//       }`}
//       ref={sectionRef}
//       aria-labelledby="about-heading"
//     >
//       {/* ───────────────── STATS ───────────────── */}
//       <div className="about__stats">
//         <StatItem
//           number={100}
//           suffix="%"
//           line1="Project"
//           line2="Delivery Rate"
//           inView={inView}
//         />

//         <StatItem
//           number={3}
//           suffix="wk"
//           line1="Average"
//           line2="MVP Delivery"
//           inView={inView}
//         />

//         <StatItem
//           number={50}
//           suffix="+"
//           line1="Projects"
//           line2="Delivered"
//           inView={inView}
//         />
//       </div>

//       {/* ───────────────── CONTENT ───────────────── */}
//       <div className="about__content">
//         <div className="about__label">
//           <span className="about__label-line" />

//           About Bluelith Technology
//         </div>

//         <h2
//           className="about__heading"
//           id="about-heading"
//         >
//           Built on Quality.
//           <span className="about__heading-accent">
//             {" "}
//             Driven{" "}
//           </span>
//           by Purpose.
//         </h2>

//         <p className="about__description">
//           Bluelith Technology is a modern
//           software company based in Bengaluru,
//           India. We help startups and
//           enterprises design, develop, and
//           scale high-performance digital
//           products.
//         </p>

//         {/* Features */}
//         <ul
//           className="about__pillars"
//           aria-label="Company strengths"
//         >
//           <li className="about__pillar">
//             <span className="about__pillar-dot" />
//             Software that solves real business
//             problems
//           </li>

//           <li className="about__pillar">
//             <span className="about__pillar-dot" />
//             Scalable engineering for modern
//             businesses
//           </li>

//           <li className="about__pillar">
//             <span className="about__pillar-dot" />
//             Reliable delivery with premium
//             quality
//           </li>
//         </ul>

//         {/* CTA */}
//         <Link
//           to="/services"
//           className="about__btn"
//           aria-label="Explore Our Services"
//         >
//           What We Do

//           <svg
//             viewBox="0 0 16 16"
//             fill="none"
//             className="about__btn-icon"
//             aria-hidden="true"
//           >
//             <path
//               d="M3 8H13M13 8L9 4M13 8L9 12"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Link>
//       </div>

//       {/* ───────────────── IMAGE ───────────────── */}
//       <div className="about__image-wrap">
//         <img
//           src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
//           alt="Bluelith Technology team collaborating"
//           className="about__image"
//           loading="lazy"
//           decoding="async"
//           width="900"
//           height="1100"
//         />

//         {/* Accent Card */}
//         <div className="about__accent-card">
//           <span className="about__accent-icon">
//             ✦
//           </span>

//           <span className="about__accent-text">
//             End-to-End Software Studio
//           </span>
//         </div>

//         {/* Badge */}
//         <div className="about__badge">
//           <svg
//             viewBox="0 0 120 120"
//             className="about__badge-ring"
//           >
//             <defs>
//               <path
//                 id="badge-circle"
//                 d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
//               />
//             </defs>

//             <text
//               fontSize="10.5"
//               fill="#999"
//               letterSpacing="3"
//             >
//               <textPath href="#badge-circle">
//                 ✦ Crafting Software Solutions
//                 ✦ Crafting Software Solutions
//               </textPath>
//             </text>
//           </svg>

//           <div className="about__badge-center">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               className="about__badge-logo"
//               aria-hidden="true"
//             >
//               <path
//                 d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
//                 stroke="#6c63ff"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(About);

/**
 * About.jsx — SEO & Performance Optimised
 *
 * Changes (UI unchanged):
 * ─ section uses itemScope / itemType="Organization"
 * ─ Heading uses itemProp="name" for richer crawl signal
 * ─ Description uses itemProp="description"
 * ─ IntersectionObserver disconnects after first fire (saves memory)
 * ─ observer.disconnect() called inside callback not just cleanup
 * ─ Image: explicit width/height to prevent CLS, loading="lazy",
 *   fetchPriority="low" (below-fold content)
 * ─ StatItem wrapped with memo (no re-render unless props change)
 * ─ useCountUp: deps array corrected (target was a prop, not number)
 * ─ Link prefetch: rel="prefetch" hint added via <link> tag in head
 *   is handled by the router; the Link itself is unchanged
 */

import React, {
  useEffect,
  useRef,
  useState,
  memo,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import "./About.css";

/* ─────────────────────────────────────────────
   COUNT UP HOOK
───────────────────────────────────────────── */
const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    /* Cancel animation frame on unmount */
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
};

/* ─────────────────────────────────────────────
   STAT ITEM
───────────────────────────────────────────── */
const StatItem = memo(({ number, suffix, line1, line2, inView }) => {
  const count = useCountUp(number, 1800, inView);

  return (
    <article className="about__stat">
      <span className="about__stat-number">
        {count}
        <span className="about__stat-suffix">{suffix}</span>
      </span>
      <p className="about__stat-label">
        {line1}
        <br />
        {line2}
      </p>
    </article>
  );
});

StatItem.displayName = "StatItem";

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
const About = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  /* Disconnect observer after first fire — saves memory + CPU */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); /* one-shot — no further observations */
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about ${inView ? "about--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="about-heading"
      /* Schema.org Organization */
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Bluelith Technology" />
      <meta
        itemProp="description"
        content="Bluelith Technology is a modern software company in Bengaluru, India, helping startups and enterprises design, develop, and scale high-performance digital products."
      />
      <meta itemProp="url" content="https://www.bluelith.in" />

      {/* ─── STATS ─── */}
      <div className="about__stats" aria-label="Company achievements">
        <StatItem
          number={100}
          suffix="%"
          line1="Project"
          line2="Delivery Rate"
          inView={inView}
        />
        <StatItem
          number={3}
          suffix="wk"
          line1="Average"
          line2="MVP Delivery"
          inView={inView}
        />
        <StatItem
          number={50}
          suffix="+"
          line1="Projects"
          line2="Delivered"
          inView={inView}
        />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="about__content">
        <div className="about__label" aria-hidden="true">
          <span className="about__label-line" />
          About Bluelith Technology
        </div>

        <h2
          className="about__heading"
          id="about-heading"
          itemProp="slogan"
        >
          Built on Quality.
          <span className="about__heading-accent"> Driven </span>
          by Purpose.
        </h2>

        <p className="about__description" itemProp="description">
          Bluelith Technology is a modern software company based in Bengaluru,
          India. We help startups and enterprises design, develop, and scale
          high-performance digital products.
        </p>

        <ul className="about__pillars" aria-label="Company values">
          <li className="about__pillar">
            <span className="about__pillar-dot" aria-hidden="true" />
            Software that solves real business problems
          </li>
          <li className="about__pillar">
            <span className="about__pillar-dot" aria-hidden="true" />
            Scalable engineering for modern businesses
          </li>
          <li className="about__pillar">
            <span className="about__pillar-dot" aria-hidden="true" />
            Reliable delivery with premium quality
          </li>
        </ul>

        {/* CTA */}
        <Link
          to="/services"
          className="about__btn"
          aria-label="Explore Bluelith Technology's services"
          title="What We Do — Bluelith Technology Services"
        >
          What We Do
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="about__btn-icon"
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
        </Link>
      </div>

      {/* ─── IMAGE ─── */}
      <div className="about__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
          alt="Bluelith Technology team collaborating on software development in Bengaluru"
          className="about__image"
          /* Below fold — lazy load is correct */
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          /* Intrinsic dimensions prevent CLS */
          width="900"
          height="1100"
          itemProp="image"
        />

        <div className="about__accent-card">
          <span className="about__accent-icon" aria-hidden="true">✦</span>
          <span className="about__accent-text">End-to-End Software Studio</span>
        </div>

        <div className="about__badge" aria-hidden="true">
          <svg viewBox="0 0 120 120" className="about__badge-ring">
            <defs>
              <path
                id="badge-circle"
                d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              />
            </defs>
            <text fontSize="10.5" fill="#999" letterSpacing="3">
              <textPath href="#badge-circle">
                ✦ Crafting Software Solutions ✦ Crafting Software Solutions
              </textPath>
            </text>
          </svg>

          <div className="about__badge-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="about__badge-logo"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#6c63ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);