// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Services.css";

// const ArrowUpRight = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
//     <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const services = [
//   {
//     id: "data-ai",
//     title: "Data & AI Intelligence",
//     shortDesc: "Turn raw data into real decisions.",
//     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
//     alt: "AI and machine learning data intelligence solutions by SkyLith Tech",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//         <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="1.5" />
//         <path d="M24 14V10M24 38V34M34 24H38M10 24H14" stroke="white" strokeWidth="1.5" />
//       </svg>
//     ),
//     items: ["AI & Machine Learning Solutions", "Data Analytics & Visualization", "Predictive Intelligence", "Business Insights & Automation"],
//   },
//   {
//     id: "cloud-infra",
//     title: "Cloud & Infrastructure",
//     shortDesc: "Reliable, secure, and built to scale.",
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
//     alt: "Cloud architecture and DevOps infrastructure solutions by SkyLith Tech",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//         <path d="M16 30H34C38 30 40 27 40 24C40 21 38 18 34 18C33 14 30 12 26 12C22 12 19 14 18 18C14 18 12 21 12 24C12 27 14 30 16 30Z" stroke="white" strokeWidth="1.5" />
//       </svg>
//     ),
//     items: ["Cloud Architecture & Deployment", "DevOps & CI/CD Pipelines", "Scalable Infrastructure", "Security & Compliance"],
//   },
//   {
//     id: "experience-design",
//     title: "Experience Design",
//     shortDesc: "Design that people love to use.",
//     img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
//     alt: "UX design and digital product experience design services by SkyLith Tech",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//         <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="1.5" />
//         <circle cx="18" cy="22" r="1.5" fill="white" />
//         <circle cx="30" cy="22" r="1.5" fill="white" />
//         <path d="M18 28C20 30 28 30 30 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     items: ["Human-Centered Design", "Digital Product Experience", "UX Research & Strategy", "Brand & Interface Systems"],
//   },
//   {
//     id: "product-engineering",
//     title: "Product Engineering",
//     shortDesc: "Code that scales. Products that last.",
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
//     alt: "Scalable web platform and product engineering services by SkyLith Tech",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
//         <path d="M18 16L10 24L18 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M30 16L38 24L30 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="24" cy="24" r="2" fill="white" />
//       </svg>
//     ),
//     items: ["Scalable Web Platforms", "Cross-Platform Applications", "Microservices Architecture", "Performance Optimization"],
//   },
// ];

// const Service = () => {
//   const [activeDot, setActiveDot] = useState(0);
//   const [inView, setInView] = useState(false);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Handle horizontal scroll buttons
//   const updateScrollButtons = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setCanScrollLeft(scrollLeft > 10);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container && window.innerWidth <= 768) {
//       container.addEventListener('scroll', updateScrollButtons);
//       updateScrollButtons();
//       return () => container.removeEventListener('scroll', updateScrollButtons);
//     }
//   }, [inView]);

//   const scrollHorizontal = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
//       scrollContainerRef.current.scrollTo({
//         left: newScrollLeft,
//         behavior: 'smooth'
//       });
//     }
//   };

//   /**
//    * Navigate to /services and pre-select a specific service.
//    * ServicesPage reads location.state.selectedService on mount.
//    */
//   const goToServices = (serviceId = null) => {
//     navigate("/services", {
//       state: { selectedService: serviceId || services[0].id },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section
//       className={`service ${inView ? "service--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="service-heading"
//       itemScope
//       itemType="https://schema.org/Service"
//     >
//       <meta itemProp="provider" content="SkyLith Technology" />
//       <meta itemProp="areaServed" content="Worldwide" />

//       <div className="service__bg-image" aria-hidden="true" />
//       <div className="service__overlay" aria-hidden="true" />

//       {/* ── HEADER ── */}
//       <header className="service__top">
//         <div className="service__top-left">
//           <span className="service__label">
//             <span className="service__label-line" aria-hidden="true" />
//             Our Services
//           </span>
//           <h2 className="service__heading" id="service-heading" itemProp="name">
//             Smart Solutions.{" "}
//             <span className="service__heading-accent">Real Results.</span>
//           </h2>
//         </div>

//         <p className="service__desc" itemProp="description">
//           From AI-powered tools to polished interfaces — we offer end-to-end digital services
//           that help startups and businesses build, scale, and grow with confidence.
//         </p>

//         {/* "Explore Services" → opens ServicesPage at first service */}
//         <button
//           type="button"
//           className="service__more-link"
//           onClick={() => goToServices()}
//           aria-label="Explore all SkyLith Technology digital services"
//         >
//           Explore Services <ArrowUpRight />
//         </button>
//       </header>

//       {/* ── CARDS (Desktop - Flex Row) ── */}
//       <div className="service__cards-wrapper">
//         <div className="service__cards-header">
//           <h3 className="service__cards-title">Our Solutions</h3>
//           <div className="service__cards-nav">
//             <button 
//               className={`service__cards-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
//               onClick={() => scrollHorizontal('left')}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//             >
//               ‹
//             </button>
//             <button 
//               className={`service__cards-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
//               onClick={() => scrollHorizontal('right')}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//             >
//               ›
//             </button>
//           </div>
//         </div>
        
//         <div className="service__cards" ref={scrollContainerRef} role="list" aria-label="SkyLith Technology service offerings">
//           {services.map((svc, i) => (
//             <article
//               key={svc.id}
//               role="listitem"
//               className={`service__card ${activeDot === i ? "service__card--active" : ""} ${inView ? "service__card--visible" : ""}`}
//               style={{ backgroundImage: `url(${svc.img})`, animationDelay: `${i * 100}ms` }}
//               onClick={() => setActiveDot(i)}
//               itemScope
//               itemType="https://schema.org/Offer"
//             >
//               <meta itemProp="name" content={svc.title} />
//               <meta itemProp="description" content={svc.shortDesc} />

//               <div className="service__card-overlay" aria-hidden="true" />
//               <div className="service__icon">{svc.icon}</div>
//               <p className="service__card-short">{svc.shortDesc}</p>
//               <h3 className="service__card-title" itemProp="name">{svc.title}</h3>

//               <ul className="service__list" aria-label={`${svc.title} services`}>
//                 {svc.items.map((item, idx) => (
//                   <li key={idx} className="service__list-item">
//                     <span className="service__list-dot" aria-hidden="true" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>

//               {/* "Explore More" → navigates to ServicesPage with THIS service pre-selected */}
//               <button
//                 type="button"
//                 className={`service__explore ${activeDot === i ? "service__explore--active" : ""}`}
//                 onClick={(e) => { e.stopPropagation(); goToServices(svc.id); }}
//                 aria-label={`Explore ${svc.title} in detail`}
//               >
//                 Explore More
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                   <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* ── DOTS (Desktop only) ── */}
//       <div className="service__dots" role="tablist" aria-label="Service navigation">
//         {services.map((svc, i) => (
//           <button
//             key={i}
//             role="tab"
//             type="button"
//             aria-selected={activeDot === i}
//             aria-label={`View ${svc.title}`}
//             className={`service__dot ${activeDot === i ? "service__dot--active" : ""}`}
//             onClick={() => setActiveDot(i)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Service;
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

// Optimized SVG component with inline size and aria-hidden
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Memoized service data for better performance
const services = [
  {
    id: "data-ai",
    title: "Data & AI Intelligence",
    shortDesc: "Turn raw data into real decisions.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format",
    imgWebp: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fm=webp",
    alt: "AI and machine learning data intelligence solutions by SkyLith Tech",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="1.5" />
        <path d="M24 14V10M24 38V34M34 24H38M10 24H14" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    items: ["AI & Machine Learning Solutions", "Data Analytics & Visualization", "Predictive Intelligence", "Business Insights & Automation"],
    keywords: ["AI", "Machine Learning", "Data Analytics", "Predictive Intelligence", "Business Automation"],
  },
  {
    id: "cloud-infra",
    title: "Cloud & Infrastructure",
    shortDesc: "Reliable, secure, and built to scale.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format",
    imgWebp: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fm=webp",
    alt: "Cloud architecture and DevOps infrastructure solutions by SkyLith Tech",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M16 30H34C38 30 40 27 40 24C40 21 38 18 34 18C33 14 30 12 26 12C22 12 19 14 18 18C14 18 12 21 12 24C12 27 14 30 16 30Z" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    items: ["Cloud Architecture & Deployment", "DevOps & CI/CD Pipelines", "Scalable Infrastructure", "Security & Compliance"],
    keywords: ["Cloud Architecture", "DevOps", "CI/CD", "Scalable Infrastructure", "Security Compliance"],
  },
  {
    id: "experience-design",
    title: "Experience Design",
    shortDesc: "Design that people love to use.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80&auto=format",
    imgWebp: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80&auto=format&fm=webp",
    alt: "UX design and digital product experience design services by SkyLith Tech",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="1.5" />
        <circle cx="18" cy="22" r="1.5" fill="white" />
        <circle cx="30" cy="22" r="1.5" fill="white" />
        <path d="M18 28C20 30 28 30 30 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    items: ["Human-Centered Design", "Digital Product Experience", "UX Research & Strategy", "Brand & Interface Systems"],
    keywords: ["UX Design", "Human-Centered Design", "Digital Product", "UX Research", "Brand Design"],
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    shortDesc: "Code that scales. Products that last.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format",
    imgWebp: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fm=webp",
    alt: "Scalable web platform and product engineering services by SkyLith Tech",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M18 16L10 24L18 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 16L38 24L30 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2" fill="white" />
      </svg>
    ),
    items: ["Scalable Web Platforms", "Cross-Platform Applications", "Microservices Architecture", "Performance Optimization"],
    keywords: ["Web Development", "Cross-Platform", "Microservices", "Performance Optimization", "Scalable Products"],
  },
];

// Lazy load background image
const bgImageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=70&auto=format";
const bgImageWebp = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=70&auto=format&fm=webp";

const Service = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [inView, setInView] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  // Intersection Observer with low threshold for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setInView(true);
          // Preload background image when section becomes visible
          const img = new Image();
          img.src = bgImageWebp;
          img.onload = () => setBgLoaded(true);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Update scroll buttons with requestAnimationFrame for performance
  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  // Throttled scroll handler
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && window.innerWidth <= 768) {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateScrollButtons();
            ticking = false;
          });
          ticking = true;
        }
      };
      container.addEventListener('scroll', handleScroll);
      updateScrollButtons();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [updateScrollButtons]);

  const scrollHorizontal = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }, []);

  const goToServices = useCallback((serviceId = null) => {
    navigate("/services", {
      state: { selectedService: serviceId || services[0].id },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  // Generate schema.org JSON-LD for SEO
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SkyLith Technology Services",
    "description": "Digital services including AI, Cloud, UX Design, and Product Engineering",
    "numberOfItems": services.length,
    "itemListElement": services.map((svc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.shortDesc,
        "provider": {
          "@type": "Organization",
          "name": "SkyLith Technology"
        },
        "serviceType": svc.title,
        "keywords": svc.keywords.join(", "),
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  }), []);

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section
        className={`service ${inView ? "service--visible" : ""}`}
        ref={sectionRef}
        aria-labelledby="service-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content="SkyLith Technology Services" />
        <meta itemProp="description" content="Professional digital services including AI & Data Intelligence, Cloud Infrastructure, Experience Design, and Product Engineering" />

        {/* Optimized background image with lazy loading */}
        <div className="service__bg-image" aria-hidden="true">
          <picture>
            <source srcSet={bgImageWebp} type="image/webp" />
            <img 
              src={bgImageUrl} 
              alt="" 
              loading="lazy"
              style={{ opacity: bgLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              width="1200"
              height="800"
            />
          </picture>
        </div>
        <div className="service__overlay" aria-hidden="true" />

        {/* HEADER */}
        <header className="service__top">
          <div className="service__top-left">
            <span className="service__label">
              <span className="service__label-line" aria-hidden="true" />
              Our Services
            </span>
            <h2 className="service__heading" id="service-heading">
              Smart Solutions.{" "}
              <span className="service__heading-accent">Real Results.</span>
            </h2>
          </div>

          <p className="service__desc">
            From AI-powered tools to polished interfaces — we offer end-to-end digital services
            that help startups and businesses build, scale, and grow with confidence.
          </p>

          <button
            type="button"
            className="service__more-link"
            onClick={() => goToServices()}
            aria-label="Explore all SkyLith Technology digital services"
          >
            Explore Services <ArrowUpRight />
          </button>
        </header>

        {/* CARDS */}
        <div className="service__cards-wrapper">
          <div className="service__cards-header">
            <h3 className="service__cards-title">Our Solutions</h3>
            <div className="service__cards-nav">
              <button 
                className={`service__cards-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={() => scrollHorizontal('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left to previous service"
              >
                ‹
              </button>
              <button 
                className={`service__cards-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
                onClick={() => scrollHorizontal('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right to next service"
              >
                ›
              </button>
            </div>
          </div>
          
          <div 
            className="service__cards" 
            ref={scrollContainerRef} 
            role="list" 
            aria-label="SkyLith Technology service offerings"
          >
            {services.map((svc, i) => (
              <article
                key={svc.id}
                role="listitem"
                className={`service__card ${activeDot === i ? "service__card--active" : ""} ${inView ? "service__card--visible" : ""}`}
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setActiveDot(i)}
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(i + 1)} />
                <meta itemScope itemProp="item" itemType="https://schema.org/Service" />
                <meta itemProp="name" content={svc.title} />
                <meta itemProp="description" content={svc.shortDesc} />

                {/* Optimized card background image */}
                <div className="service__card-bg" aria-hidden="true">
                  <picture>
                    <source srcSet={svc.imgWebp} type="image/webp" />
                    <img 
                      src={svc.img} 
                      alt="" 
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </picture>
                </div>
                <div className="service__card-overlay" aria-hidden="true" />
                
                <div className="service__icon">{svc.icon}</div>
                <p className="service__card-short">{svc.shortDesc}</p>
                <h3 className="service__card-title" itemProp="name">{svc.title}</h3>

                <ul className="service__list" aria-label={`${svc.title} services`}>
                  {svc.items.map((item, idx) => (
                    <li key={idx} className="service__list-item">
                      <span className="service__list-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`service__explore ${activeDot === i ? "service__explore--active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); goToServices(svc.id); }}
                  aria-label={`Explore ${svc.title} in detail`}
                >
                  Explore More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* DOTS (Desktop only) */}
        <div className="service__dots" role="tablist" aria-label="Service navigation">
          {services.map((svc, i) => (
            <button
              key={i}
              role="tab"
              type="button"
              aria-selected={activeDot === i}
              aria-label={`View ${svc.title}`}
              className={`service__dot ${activeDot === i ? "service__dot--active" : ""}`}
              onClick={() => setActiveDot(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;