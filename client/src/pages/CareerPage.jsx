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

import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Career from "../components/career/Career";

/**
 * CAREER PAGE
 * Route: /career
 * Renders the Navbar + Career component (full job listings, application form, FAQ) + Footer
 */
const CareerPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar />
      <main id="careerpage" aria-label="Careers at BlueLih Technology">
        <Career />
      </main>
      <Footer />
    </>
  );
};

export default CareerPage;