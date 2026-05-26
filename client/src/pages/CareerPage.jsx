// import Navbar from "../components/layout/Navbar/Navbar";
// import Footer from "../components/layout/Footer/Footer";

// function CareerPage() {
//   return (
//     <>
//       <Navbar />

//       <section id="careerpage" className="page-section">
//         <div className="container">
//           <h1>Careers</h1>

//           <p>
//             Join our team and help us create amazing
//             digital experiences.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default CareerPage;

// import React, { useEffect } from "react";
// import Navbar from "../components/layout/Navbar/Navbar";
// import Footer from "../components/layout/Footer/Footer";
// import Career from "../components/career/Career";

// /**
//  * CAREER PAGE
//  * Route: /career
//  * Renders the Navbar + Career component (full job listings, application form, FAQ) + Footer
//  */
// const CareerPage = () => {
//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <main id="careerpage" aria-label="Careers at BlueLih Technology">
//         <Career />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default CareerPage;

// src/pages/CareerPage.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Career from "../components/career/Career";

/**
 * CAREER PAGE
 * Route: /careers
 * Renders Navbar + Career component + Footer
 */
const CareerPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          Careers at Bluelith Technology | Software Jobs in Bengaluru
        </title>

        <meta
          name="description"
          content="Join Bluelith Technology — one of Bengaluru's fast-growing software and IT companies. We're hiring software engineers, designers, and product managers. Explore open roles today."
        />

        <meta
          name="keywords"
          content="software jobs Bengaluru, IT jobs Bangalore, software engineer jobs India, tech company hiring Bengaluru, web developer jobs Bangalore, AI developer jobs India, Bluelith Technology careers"
        />

        <link
          rel="canonical"
          href="https://www.bluelith.in/careers"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.bluelith.in/careers"
        />

        <meta
          property="og:title"
          content="Careers at Bluelith Technology | Software Jobs in Bengaluru"
        />

        <meta
          property="og:description"
          content="Build your career at Bluelith Technology — Bengaluru's fast-growing software and IT company. We're hiring engineers, designers, and product managers."
        />

        <meta
          property="og:image"
          content="https://www.bluelith.in/og-careers.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Careers at Bluelith Technology | Tech Jobs Bengaluru"
        />

        <meta
          name="twitter:description"
          content="Join Bluelith Technology in Bengaluru. We're hiring software engineers, designers, and product managers."
        />

        <meta
          name="twitter:image"
          content="https://www.bluelith.in/og-careers.jpg"
        />
      </Helmet>

      <Navbar />

      <main id="careerpage" aria-label="Careers at Bluelith Technology">
        <Career />
      </main>

      <Footer />
    </>
  );
};

export default CareerPage;