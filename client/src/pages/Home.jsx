import { Helmet } from 'react-helmet-async'
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
      {/* ── SEO Meta Tags ── */}
      <Helmet>
        <title>Bluelith Technology | Software &amp; IT Company in Bengaluru | AI Solutions</title>
        <meta
          name="description"
          content="Bluelith Technology is a top-rated software and IT company in Bengaluru. We build AI-powered web apps, mobile apps &amp; digital products for startups and enterprises. Free consultation available."
        />
        <meta
          name="keywords"
          content="software company Bengaluru, IT company Bangalore, AI software development India, web app development Bengaluru, custom software development India, mobile app development Bangalore, UI UX design agency India, product engineering company Bengaluru, SaaS development India, digital transformation Bangalore, best IT company Bengaluru"
        />
        <link rel="canonical" href="https://www.bluelith.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bluelith.in/" />
        <meta property="og:title" content="Bluelith Technology | Software &amp; IT Company in Bengaluru | AI Solutions" />
        <meta
          property="og:description"
          content="Strategy. Design. Engineering. Delivered. Top-rated software &amp; IT company in Bengaluru building AI-powered web apps, mobile apps &amp; digital products worldwide."
        />
        <meta property="og:image" content="https://www.bluelith.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Bluelith Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bluelith" />
        <meta name="twitter:title" content="Bluelith Technology | Software &amp; IT Company in Bengaluru" />
        <meta
          name="twitter:description"
          content="AI-powered web apps, mobile apps &amp; digital products for startups and enterprises. Top software &amp; IT company in Bengaluru."
        />
        <meta name="twitter:image" content="https://www.bluelith.in/og-image.jpg" />
      </Helmet>

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

      {/* ── Industries / Solutions ── */}
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
      <section id="blogs" aria-label="Insights &amp; Blog">
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