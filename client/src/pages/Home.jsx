// import Navbar from "../components/layout/Navbar/Navbar";
// import Footer from "../components/layout/Footer/Footer";

// import Hero from "../components/home/Hero/Hero";
// import About from "../components/home/About/About";
// import Services from "../components/home/Services/Services";
// import WhyChoose from "../components/home/WhyChoose/WhyChooseUs";

// function Home() {
//   return (
//     <>
//       <Navbar />

//       <Hero />
//       <About />
//       <WhyChoose />
//       <Services />


//       <Footer />
//     </>
//   );
// }

// export default Home;

import React from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import About from "../components/home/About/About";
import Service from "../components/home/Services/Services";
import Blog from "../components/services/Blog";
import WhyChooseUs from "../components/home/WhyChoose/WhyChooseUs";
import Industries from "../components/home/Solution/Industries";

/**
 * HOME PAGE
 * Each <section> id must match the sectionId values in Navbar NAV_ITEMS:
 *   home | about | industries | approach | blogs | services
 */
const Home = () => {
  return (
    <>
      {/* ── Fixed top navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section id="home" aria-label="Hero">
        <Hero />
      </section>

      {/* ── About / Overview ── */}
      <section id="about" aria-label="About us">
        <About />
      </section>

      {/* ── Industries / Solutions ──
          Replace <PlaceholderSection> with your real Industries component */}
      <section id="industries" aria-label="Our Solutions">
        <Industries />
      </section>

      {/* ── Approach / Process ── */}
      <section id="approach" aria-label="Our Process">
        <WhyChooseUs />
      </section>

      {/* ── Services / Work ── */}
      <section id="services" aria-label="Our Work">
        <Service />
      </section>

      {/* ── Blog / Insights ── */}
      <section id="blogs" aria-label="Insights & Blog">
        <Blog />
      </section>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
};

/* Placeholder — remove once real sections are built */
const PlaceholderSection = ({ title, subtitle, bg }) => (
  <div
    style={{
      background: bg,
      padding: "100px 80px",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    <p
      style={{
        fontSize: 12,
        color: "#6c63ff",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      Section
    </p>
    <h2
      style={{
        fontSize: 32,
        fontWeight: 700,
        color: "#0d0d14",
        marginBottom: 12,
      }}
    >
      {title}
    </h2>
    <p style={{ fontSize: 15, color: "#888" }}>{subtitle}</p>
  </div>
);

export default Home;