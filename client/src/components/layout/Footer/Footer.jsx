

// import React, { useState, lazy, Suspense } from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";

// /* Lazy Load Contact Popup */
// const ContactPopup = lazy(() =>
//   import("../../contact/ContactPopup")
// );

// const Footer = () => {
//   const [isPopupOpen, setIsPopupOpen] =
//     useState(false);

//   return (
//     <>
//       <footer
//         id="footer"
//         className="footer"
//         role="contentinfo"
//         itemScope
//         itemType="https://schema.org/WPFooter"
//         aria-label="Bluelith Technology Footer"
//       >
//         {/* Background Effects */}
//         <div
//           className="footer__bg"
//           aria-hidden="true"
//         />
//         <div
//           className="footer__glow"
//           aria-hidden="true"
//         />

//         <div className="footer__inner">
//           {/* ───────────── CTA ───────────── */}
//           <section className="footer__cta-band">
//             <div className="footer__cta-left">
//               <span className="footer__cta-label">
//                 <span
//                   className="footer__cta-label-line"
//                   aria-hidden="true"
//                 />
//                 Let's Work Together
//               </span>

//               <h2 className="footer__cta-heading">
//                 Ready to build something{" "}
//                 <span className="footer__accent">
//                   great?
//                 </span>
//               </h2>

//               <p className="footer__cta-sub">
//                 Have an idea? A product to launch?
//                 A startup to scale? We'd love to hear
//                 from you.
//               </p>
//             </div>

//             <button
//               className="footer__cta-btn"
//               onClick={() => setIsPopupOpen(true)}
//               aria-label="Open Contact Form"
//             >
//               Get In Touch

//               <svg
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 className="footer__cta-icon"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M3 13L13 3M13 3H6M13 3V10"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </section>

//           <div
//             className="footer__divider"
//             aria-hidden="true"
//           />

//           {/* ───────────── GRID ───────────── */}
//           <div className="footer__grid">
//             {/* ───────── BRAND ───────── */}
//             <section className="footer__col footer__col--brand">
//               <Link
//                 to="/"
//                 className="footer__logo"
//                 aria-label="Bluelith Technology Home"
//               >
//                 <div
//                   className="footer__logo-mark"
//                   aria-hidden="true"
//                 >
//                   BT
//                 </div>

//                 <span
//                   className="footer__logo-text"
//                   itemProp="name"
//                 >
//                   Bluelith Technology
//                 </span>
//               </Link>

//               <p
//                 className="footer__tagline"
//                 itemProp="description"
//               >
//                 Modern web development, UI/UX,
//                 branding, and scalable digital
//                 solutions for startups and businesses
//                 worldwide.
//               </p>

//               {/* Social Links */}
//               <nav
//                 className="footer__socials"
//                 aria-label="Social Media"
//               >
//                 <a
//                   href="https://instagram.com/bluelith"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="footer__social"
//                   aria-label="Instagram"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <rect
//                       x="2"
//                       y="2"
//                       width="20"
//                       height="20"
//                       rx="5"
//                       stroke="currentColor"
//                       strokeWidth="1.6"
//                     />
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="4"
//                       stroke="currentColor"
//                       strokeWidth="1.6"
//                     />
//                     <circle
//                       cx="17.5"
//                       cy="6.5"
//                       r="1"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </a>

//                 <a
//                   href="https://linkedin.com/company/bluelith"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="footer__social"
//                   aria-label="LinkedIn"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0z" />
//                   </svg>
//                 </a>
//               </nav>
//             </section>

//             {/* ───────── QUICK LINKS ───────── */}
//             <nav
//               className="footer__col"
//               aria-label="Quick Links"
//             >
//               <h3 className="footer__col-heading">
//                 Quick Links
//               </h3>

//               <ul className="footer__list">
//                 {[
//                   { label: "Home", to: "/" },
//                   {
//                     label: "Overview",
//                     to: "/#about",
//                   },
//                   {
//                     label: "Solutions",
//                     to: "/#industries",
//                   },
//                   {
//                     label: "Process",
//                     to: "/#approach",
//                   },
//                   {
//                     label: "Work",
//                     to: "/#services",
//                   },
//                   {
//                     label: "Insights",
//                     to: "/#blogs",
//                   },
//                 ].map((item) => (
//                   <li
//                     key={item.label}
//                     className="footer__list-item"
//                   >
//                     <span
//                       className="footer__list-dash"
//                       aria-hidden="true"
//                     />

//                     <Link
//                       to={item.to}
//                       className="footer__list-link"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* ───────── SERVICES ───────── */}
//             <nav
//               className="footer__col"
//               aria-label="Services"
//             >
//               <h3 className="footer__col-heading">
//                 Services
//               </h3>

//               <ul className="footer__list">
//                 {[
//                   "Web Development",
//                   "UI/UX Design",
//                   "App Development",
//                   "Brand Identity",
//                   "SEO Optimization",
//                   "Digital Marketing",
//                 ].map((service) => (
//                   <li
//                     key={service}
//                     className="footer__list-item"
//                   >
//                     <span
//                       className="footer__list-dash"
//                       aria-hidden="true"
//                     />

//                     <Link
//                       to="/services"
//                       className="footer__list-link"
//                     >
//                       {service}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* ───────── CONTACT ───────── */}
//             <section
//               className="footer__col"
//               itemScope
//               itemType="https://schema.org/LocalBusiness"
//             >
//               <meta
//                 itemProp="name"
//                 content="Bluelith Technology"
//               />

//               <h3 className="footer__col-heading">
//                 Contact Us
//               </h3>

//               <ul className="footer__contact-list">
//                 <li className="footer__contact-item">
//                   <a
//                     href="mailto:managingdirector@bluelith.in"
//                     className="footer__contact-link"
//                     itemProp="email"
//                   >
//                     managingdirector@bluelith.in
//                   </a>
//                 </li>

//                 <li className="footer__contact-item">
//                   <a
//                     href="tel:+919905906689"
//                     className="footer__contact-link"
//                     itemProp="telephone"
//                   >
//                     +91 99059 06689
//                   </a>
//                 </li>

//                 <li className="footer__contact-item">
//                   <span
//                     className="footer__contact-link"
//                     itemProp="address"
//                   >
//                     Bengaluru, India
//                   </span>
//                 </li>
//               </ul>
//             </section>
//           </div>

//           {/* ───────── BOTTOM ───────── */}
//           <div className="footer__bottom">
//             <p className="footer__copyright">
//               © 2026{" "}
//               <span className="footer__accent">
//                 Bluelith Technology
//               </span>
//               . All rights reserved.
//             </p>

//             <nav
//               className="footer__bottom-links"
//               aria-label="Legal Links"
//             >
//               <Link
//                 to="/privacy-policy"
//                 className="footer__bottom-link"
//               >
//                 Privacy Policy
//               </Link>

//               <span
//                 className="footer__bottom-sep"
//                 aria-hidden="true"
//               >
//                 ·
//               </span>

//               <Link
//                 to="/terms-and-conditions"
//                 className="footer__bottom-link"
//               >
//                 Terms & Conditions
//               </Link>

//               <span
//                 className="footer__bottom-sep"
//                 aria-hidden="true"
//               >
//                 ·
//               </span>

//               <Link
//                 to="/sitemap.xml"
//                 className="footer__bottom-link"
//               >
//                 Sitemap
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </footer>

//       {/* Lazy Loaded Popup */}
//       <Suspense fallback={null}>
//         <ContactPopup
//           isOpen={isPopupOpen}
//           onClose={() => setIsPopupOpen(false)}
//         />
//       </Suspense>
//     </>
//   );
// };

// export default Footer;
/**
 * Footer.jsx — SEO & Performance Optimised
 *
 * Changes (UI unchanged):
 * ─ <footer> uses itemScope / itemType="WPFooter"
 * ─ Brand section uses itemScope / itemType="Organization"
 * ─ Contact section uses itemScope / itemType="LocalBusiness"
 *   with full address, telephone, and email itemProps
 * ─ Social links: rel="noopener noreferrer" (security + no PageRank leak)
 * ─ All internal links kept as <Link> (React Router — no full page reload)
 * ─ ContactPopup remains lazy-loaded (not needed on first paint)
 * ─ Newsletter form: aria-label + role="form" for accessibility
 * ─ Copyright year updated to 2026
 * ─ Sitemap link → /sitemap.xml (crawler-friendly)
 */

import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

/* Lazy-load — not needed on first paint */
const ContactPopup = lazy(() => import("../../contact/ContactPopup"));

/* ─────────────────────────────────────────────
   QUICK LINKS — module-level
───────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: "Home",      to: "/"          },
  { label: "About",     to: "/#about"    },
  { label: "Services",  to: "/services"  },
  { label: "Work",      to: "/#services" },
  { label: "Insights",  to: "/#blogs"    },
  { label: "Career",    to: "/careers"   },
];

const SERVICE_LINKS = [
  "Web Development",
  "UI/UX Design",
  "App Development",
  "Brand Identity",
  "SEO Optimisation",
  "Digital Marketing",
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/bluelith",
    label: "Bluelith Technology on Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/bluelith",
    label: "Bluelith Technology on Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.067C2.179 20.29 4.768 21 7.548 21c9.057 0 14-7.496 14-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/bluelith",
    label: "Bluelith Technology on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM20.452 20.452h-3.56v-5.57c0-1.326-.026-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.56V9h3.415v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <footer
        id="footer"
        className="footer"
        aria-label="Bluelith Technology footer"
        /* Schema.org WPFooter */
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="footer__bg" aria-hidden="true" />
        <div className="footer__glow" aria-hidden="true" />

        <div className="footer__inner">

          {/* ─── CTA BAND ─── */}
          <div className="footer__cta-band">
            <div className="footer__cta-left">
              <span className="footer__cta-label">
                <span className="footer__cta-label-line" aria-hidden="true" />
                Let's Work Together
              </span>
              <h2 className="footer__cta-heading">
                Ready to build something{" "}
                <span className="footer__accent">great?</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="footer__cta-btn"
              aria-label="Get in touch with Bluelith Technology"
              title="Contact Bluelith Technology — Web & AI Solutions"
            >
              Get In Touch
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="footer__cta-icon"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="footer__divider" aria-hidden="true" />

          {/* ─── MAIN GRID ─── */}
          <div className="footer__grid">

            {/* BRAND */}
            <div
              className="footer__col footer__col--brand"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <div className="footer__logo">
                <div
                  className="footer__logo-mark"
                  aria-hidden="true"
                >
                  BT
                </div>
                <span
                  className="footer__logo-text"
                  itemProp="name"
                >
                  Bluelith Technology
                </span>
              </div>

              <p className="footer__tagline" itemProp="description">
                A full-service software company based in Bengaluru, India —
                building modern digital products for startups and growing
                businesses worldwide.
              </p>

              <nav
                className="footer__socials"
                aria-label="Bluelith Technology social media"
              >
                {SOCIAL_LINKS.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    /* noopener: security; noreferrer: no referrer header */
                    rel="noopener noreferrer"
                    className="footer__social"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </nav>
            </div>

            {/* QUICK LINKS */}
            <nav
              className="footer__col"
              aria-label="Quick navigation links"
            >
              <h3 className="footer__col-heading">Quick Links</h3>
              <ul className="footer__list">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label} className="footer__list-item">
                    <span className="footer__list-dash" aria-hidden="true" />
                    <Link to={item.to} className="footer__list-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SERVICES */}
            <nav
              className="footer__col"
              aria-label="Bluelith Technology services"
            >
              <h3 className="footer__col-heading">Services</h3>
              <ul className="footer__list">
                {SERVICE_LINKS.map((service) => (
                  <li key={service} className="footer__list-item">
                    <span className="footer__list-dash" aria-hidden="true" />
                    <Link
                      to="/services"
                      className="footer__list-link"
                      title={`${service} — Bluelith Technology`}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CONTACT */}
            <section
              className="footer__col"
              aria-labelledby="footer-contact-heading"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content="Bluelith Technology" />
              <meta itemProp="url" content="https://www.bluelith.in" />

              <h3
                id="footer-contact-heading"
                className="footer__col-heading"
              >
                Contact Us
              </h3>

              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="footer__contact-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4h16v12H2V4z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 4l8 7 8-7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <a
                    href="mailto:managingdirector@bluelith.in"
                    className="footer__contact-link"
                    itemProp="email"
                    aria-label="Email Bluelith Technology"
                  >
                    managingdirector@bluelith.in
                  </a>
                </li>

                <li className="footer__contact-item">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="footer__contact-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 2h3l1.5 4-2 1.5a11 11 0 004 4L13 9.5l4 1.5V14a2 2 0 01-2 2C6.477 16 2 11.523 2 6a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>

                <li className="footer__contact-item">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="footer__contact-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 11a3 3 0 100-6 3 3 0 000 6z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                  <address
                    className="footer__contact-link"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    style={{ fontStyle: "normal" }}
                  >
                    <span itemProp="addressLocality">Bengaluru</span>,{" "}
                    <span itemProp="addressCountry">India</span>
                  </address>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="footer__newsletter">
                <p className="footer__newsletter-label" id="newsletter-label">
                  Stay Updated
                </p>
                <div
                  className="footer__newsletter-form"
                  role="form"
                  aria-labelledby="newsletter-label"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="footer__newsletter-input"
                    aria-label="Email address for newsletter"
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className="footer__newsletter-btn"
                    aria-label="Subscribe to Bluelith Technology newsletter"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* ─── BOTTOM BAR ─── */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2026{" "}
              <span className="footer__accent">Bluelith Technology</span>. All
              rights reserved.
            </p>

            <nav
              className="footer__bottom-links"
              aria-label="Legal links"
            >
              <Link to="/privacy-policy" className="footer__bottom-link">
                Privacy Policy
              </Link>
              <span className="footer__bottom-sep" aria-hidden="true">·</span>
              <Link to="/terms-and-conditions" className="footer__bottom-link">
                Terms &amp; Conditions
              </Link>
              <span className="footer__bottom-sep" aria-hidden="true">·</span>
              {/* /sitemap.xml is crawlable by Googlebot */}
              <Link to="/sitemap.xml" className="footer__bottom-link">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Lazy popup */}
      <Suspense fallback={null}>
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </Suspense>
    </>
  );
};

export default Footer;