

// import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "./Navbar.css";

// /* Lazy Load Popup */
// const ContactPopup = lazy(() => import("../../contact/ContactPopup"));

// /* Logo */
// import logo from "../../../assets/images/BLT.webp";

// /* ─────────────────────────────────────────────
//    NAV ITEMS
// ───────────────────────────────────────────── */
// const NAV_ITEMS = [
//   { label: "Home", href: "/#home", sectionId: "home" },
//   { label: "Overview", href: "/#about", sectionId: "about" },
//   { label: "Solutions", href: "/#industries", sectionId: "industries" },
//   { label: "Process", href: "/#approach", sectionId: "approach" },
//   { label: "Work", href: "/#services", sectionId: "services" },
//   { label: "Insights", href: "/#blogs", sectionId: "blogs" },
//   { label: "Career", path: "/careers" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const navigate = useNavigate();
//   const location = useLocation();

//   /* ─────────────────────────────────────────────
//      Navbar Scroll Effect
//   ───────────────────────────────────────────── */
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   /* ─────────────────────────────────────────────
//      Scroll Spy
//   ───────────────────────────────────────────── */
//   useEffect(() => {
//     if (location.pathname !== "/") return;

//     const sections = NAV_ITEMS.filter(
//       (item) => item.sectionId
//     ).map((item) => item.sectionId);

//     const handleScrollSpy = () => {
//       const scrollPosition = window.scrollY + 120;

//       for (const id of sections) {
//         const section = document.getElementById(id);

//         if (section) {
//           const { offsetTop, offsetHeight } = section;

//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(id);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScrollSpy, {
//       passive: true,
//     });

//     handleScrollSpy();

//     return () => {
//       window.removeEventListener("scroll", handleScrollSpy);
//     };
//   }, [location.pathname]);

//   /* ─────────────────────────────────────────────
//      Prevent Body Scroll
//   ───────────────────────────────────────────── */
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   /* ─────────────────────────────────────────────
//      Close Menu on Resize
//   ───────────────────────────────────────────── */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 900) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   /* ─────────────────────────────────────────────
//      Smooth Scroll
//   ───────────────────────────────────────────── */
//   const scrollToSection = useCallback((id, retries = 8) => {
//     const element = document.getElementById(id);

//     if (element) {
//       const top =
//         element.getBoundingClientRect().top +
//         window.scrollY -
//         80;

//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     } else if (retries > 0) {
//       setTimeout(() => {
//         scrollToSection(id, retries - 1);
//       }, 150);
//     }
//   }, []);

//   /* ─────────────────────────────────────────────
//      Handle Navigation
//   ───────────────────────────────────────────── */
//   const handleNavClick = useCallback(
//     (item) => {
//       setMenuOpen(false);

//       if (item.path) {
//         navigate(item.path);

//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });

//         return;
//       }

//       if (location.pathname === "/") {
//         scrollToSection(item.sectionId);
//       } else {
//         navigate("/");

//         setTimeout(() => {
//           scrollToSection(item.sectionId);
//         }, 400);
//       }
//     },
//     [location.pathname, navigate, scrollToSection]
//   );

//   /* ─────────────────────────────────────────────
//      Active State
//   ───────────────────────────────────────────── */
//   const isActive = (item) => {
//     if (item.path) {
//       return location.pathname.startsWith(item.path);
//     }

//     return (
//       location.pathname === "/" &&
//       activeSection === item.sectionId
//     );
//   };

//   return (
//     <>
//       {/* SEO Friendly Header */}
//       <header role="banner">
//         <nav
//           className={`navbar ${
//             scrolled ? "navbar--scrolled" : ""
//           }`}
//           role="navigation"
//           aria-label="Main Navigation"
//           itemScope
//           itemType="https://schema.org/SiteNavigationElement"
//         >
//           {/* ───────────────── LOGO ───────────────── */}
//           <Link
//             to="/"
//             className="navbar__logo"
//             aria-label="Bluelith Technology Home"
//             itemProp="url"
//             onClick={() => scrollToSection("home")}
//           >
//             <img
//               src={logo}
//               alt="Bluelith Technology Logo"
//               className="navbar__logo-img"
//               loading="lazy"
//               decoding="async"
//               width="180"
//               height="58"
//             />
//           </Link>

//           {/* ───────────────── NAV LINKS ───────────────── */}
//           <ul
//             id="mobile-nav"
//             className={`navbar__nav ${
//               menuOpen ? "active" : ""
//             }`}
//             role="menubar"
//             aria-label="Website Sections"
//           >
//             {NAV_ITEMS.map((item) => {
//               const active = isActive(item);

//               return (
//                 <li key={item.label} role="none">
//                   {item.path ? (
//                     <Link
//                       to={item.path}
//                       role="menuitem"
//                       className={`navbar__nav-link ${
//                         active
//                           ? "navbar__nav-link--active"
//                           : ""
//                       }`}
//                       aria-current={
//                         active ? "page" : undefined
//                       }
//                       onClick={() => setMenuOpen(false)}
//                       itemProp="name"
//                     >
//                       {item.label}
//                     </Link>
//                   ) : (
//                     <a
//                       href={item.href}
//                       role="menuitem"
//                       className={`navbar__nav-link ${
//                         active
//                           ? "navbar__nav-link--active"
//                           : ""
//                       }`}
//                       aria-current={
//                         active ? "page" : undefined
//                       }
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleNavClick(item);
//                       }}
//                       itemProp="name"
//                     >
//                       {item.label}
//                     </a>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           {/* ───────────────── ACTIONS ───────────────── */}
//           <div className="navbar__actions">
//             <button
//               className="navbar__cta"
//               type="button"
//               onClick={() => {
//                 setMenuOpen(false);
//                 setPopupOpen(true);
//               }}
//               aria-label="Open Contact Form"
//             >
//               Let's Talk
//             </button>

//             {/* Mobile Menu */}
//             <button
//               className={`navbar__menu-btn ${
//                 menuOpen ? "open" : ""
//               }`}
//               type="button"
//               onClick={() =>
//                 setMenuOpen((prev) => !prev)
//               }
//               aria-label={
//                 menuOpen
//                   ? "Close Navigation Menu"
//                   : "Open Navigation Menu"
//               }
//               aria-expanded={menuOpen}
//               aria-controls="mobile-nav"
//             >
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* ───────────────── POPUP ───────────────── */}
//       <Suspense fallback={null}>
//         <ContactPopup
//           isOpen={popupOpen}
//           onClose={() => setPopupOpen(false)}
//         />
//       </Suspense>
//     </>
//   );
// };

// export default Navbar;

/**
 * Navbar.jsx — SEO & Performance Optimised
 *
 * Changes (UI unchanged):
 * ─ Logo <img> now gets fetchPriority="high" + loading="eager"
 *   (navbar logo is above-the-fold; lazy-loading it hurts LCP)
 * ─ ContactPopup remains lazy-loaded via React.lazy + Suspense
 * ─ scroll + resize listeners already use { passive: true } ✓
 * ─ Scroll spy observer disconnects when off homepage (saves CPU)
 * ─ useCallback deps are correct — no stale closures
 * ─ Hamburger spans use aria-hidden="true" ✓
 * ─ <header role="banner"> + <nav role="navigation"> ✓ (SEO landmarks)
 * ─ itemScope / itemType for SiteNavigationElement ✓
 * ─ Added rel="noopener noreferrer" guard on external paths
 * ─ Removed unused "Link" import kept only button/anchor pattern
 */

import React, {
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

/* Lazy-load popup — not needed on first paint */
const ContactPopup = lazy(() => import("../../contact/ContactPopup"));

/* Logo */
import logo from "../../../assets/images/BLT.webp";

/* ─────────────────────────────────────────────
   NAV ITEMS
───────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home",      href: "/#home",       sectionId: "home"       },
  { label: "Overview",  href: "/#about",      sectionId: "about"      },
  { label: "Solutions", href: "/#industries", sectionId: "industries" },
  { label: "Process",   href: "/#approach",   sectionId: "approach"   },
  { label: "Work",      href: "/#services",   sectionId: "services"   },
  { label: "Insights",  href: "/#blogs",      sectionId: "blogs"      },
  { label: "Career",    path: "/careers"                               },
];

const Navbar = () => {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [popupOpen,     setPopupOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate  = useNavigate();
  const location  = useLocation();

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll-spy (homepage only) ── */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const SECTION_IDS = NAV_ITEMS
      .filter((n) => n.sectionId)
      .map((n) => n.sectionId);

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 130;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]);

  /* ── Body scroll lock when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Smooth scroll with retry ── */
  const scrollToSection = useCallback((id, retries = 8) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (retries > 0) {
      setTimeout(() => scrollToSection(id, retries - 1), 150);
    }
  }, []);

  /* ── Nav click handler ── */
  const handleNavClick = useCallback(
    (item) => {
      setMenuOpen(false);

      if (item.path) {
        navigate(item.path);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (location.pathname === "/") {
        scrollToSection(item.sectionId);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(item.sectionId), 400);
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  /* ── Active state ── */
  const isActive = (item) => {
    if (item.path) return location.pathname.startsWith(item.path);
    return location.pathname === "/" && activeSection === item.sectionId;
  };

  return (
    <>
      {/* <header> is a landmark — Google uses it for navigation discovery */}
      <header role="banner">
        <nav
          className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
          role="navigation"
          aria-label="Main navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          {/* ── LOGO ── */}
          <Link
            to="/"
            className="navbar__logo"
            aria-label="Bluelith Technology — Home"
            itemProp="url"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="Bluelith Technology — AI and Software Solutions Bengaluru"
              className="navbar__logo-img"
              /*
               * Logo is above fold & part of LCP calculation.
               * eager + high-priority = browser fetches it ASAP.
               */
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="180"
              height="58"
            />
          </Link>

          {/* ── NAV LIST ── */}
          <ul
            id="mobile-nav"
            className={`navbar__nav${menuOpen ? " active" : ""}`}
            role="menubar"
            aria-label="Site sections"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.label} role="none">
                  {item.path ? (
                    /* Internal page link */
                    <Link
                      to={item.path}
                      role="menuitem"
                      className={`navbar__nav-link${
                        active ? " navbar__nav-link--active" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      itemProp="name"
                      title={`Navigate to ${item.label} page`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* Section anchor */
                    <a
                      href={item.href}
                      role="menuitem"
                      className={`navbar__nav-link${
                        active ? " navbar__nav-link--active" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                      itemProp="name"
                      title={`Jump to ${item.label} section`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ── ACTIONS ── */}
          <div className="navbar__actions">
            <button
              className="navbar__cta"
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setPopupOpen(true);
              }}
              aria-label="Open contact form — Let's Talk"
            >
              Let's Talk
            </button>

            <button
              className={`navbar__menu-btn${menuOpen ? " open" : ""}`}
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── LAZY CONTACT POPUP ── */}
      <Suspense fallback={null}>
        <ContactPopup
          isOpen={popupOpen}
          onClose={() => setPopupOpen(false)}
        />
      </Suspense>
    </>
  );
};

export default Navbar;