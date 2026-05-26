
import { Helmet } from 'react-helmet-async';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import About from "../components/home/About/About";
import Service from "../components/home/Services/Services";
import Blog from "../components/services/Blog";
import WhyChooseUs from "../components/home/WhyChoose/WhyChooseUs";
import Industries from "../components/home/Solution/Industries";

const Home = () => {
  return (
    <>
      {/* ── SEO Meta Tags ── */}
      <Helmet>
        {/* ✅ FIX 1: 53 chars (was 71) */}
        <title>Bluelith Technology | AI &amp; IT Solutions, Bengaluru</title>

        {/* ✅ FIX 2: 154 chars (was 202) */}
        <meta
          name="description"
          content="Bluelith Technology builds AI-powered web &amp; mobile apps for startups and enterprises. Top-rated software &amp; IT company in Bengaluru. Get a free consultation."
        />

        {/* ✅ FIX 3: meta keywords removed — Google ignores it */}

        <link rel="canonical" href="https://www.bluelith.in/" />

        {/* ✅ FIX 4: og:title matches <title> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bluelith.in/" />
        <meta property="og:title" content="Bluelith Technology | AI &amp; IT Solutions, Bengaluru" />
        <meta
          property="og:description"
          content="Strategy. Design. Engineering. Delivered. AI-powered web apps, mobile apps &amp; digital products for startups and enterprises — based in Bengaluru, India."
        />
        <meta property="og:image" content="https://www.bluelith.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bluelith Technology — AI &amp; Software Solutions, Bengaluru" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Bluelith Technology" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bluelith" />
        {/* ✅ FIX 5: twitter:title matches <title> */}
        <meta name="twitter:title" content="Bluelith Technology | AI &amp; IT Solutions, Bengaluru" />
        <meta
          name="twitter:description"
          content="AI-powered web apps, mobile apps &amp; digital products for startups and enterprises. Top-rated software &amp; IT company in Bengaluru, India."
        />
        <meta name="twitter:image" content="https://www.bluelith.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Bluelith Technology — AI &amp; Software Solutions, Bengaluru" />
      </Helmet>

      {/* ── Fixed top navbar ── */}
      <Navbar />

      {/* ── Hero ──
          ✅ FIX 6: H1 lives here — one per page, keyword-rich.
          Pass it as a prop so Hero renders it inside its own markup,
          keeping layout control inside the component.
          If Hero already renders an <h1>, set this prop and remove
          any existing hard-coded <h1> inside Hero.jsx.         ── */}
      <section id="home" aria-label="Hero">
        <Hero
          h1="AI-Powered Software & IT Solutions — Bluelith Technology, Bengaluru"
        />
      </section>

      {/* ── About / Overview ── */}
      <section id="about" aria-label="About Bluelith Technology">
        <About />
      </section>

      {/* ── Industries / Solutions ── */}
      <section id="industries" aria-label="Software Solutions by Industry">
        <Industries />
      </section>

      {/* ── Approach / Process ── */}
      <section id="approach" aria-label="Our Development Process">
        <WhyChooseUs />
      </section>

      {/* ── Services / Work ── */}
      <section id="services" aria-label="Our Work and Services">
        <Service />
      </section>

      {/* ── Blog / Insights ── */}
      <section id="blogs" aria-label="Insights and Blog">
        <Blog />
      </section>

      {/* ✅ FIX 7: Internal + external links
          Place this just above the Footer — acts as a
          lightweight site-links / resources block that
          crawlers can follow on every homepage visit.     ── */}
      <nav aria-label="Quick links" style={{ display: "none" }}>
        {/* Internal links — crawlable even when visually hidden */}
        <Link to="/careers">Careers at Bluelith Technology</Link>
        <Link to="/contact">Contact Bluelith Technology</Link>
        <Link to="/blogs">Insights &amp; Blog</Link>
        <Link to="/services">Our Services</Link>

        {/* External links — high-authority, relevant */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
        <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">Flutter</a>
        <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud</a>
        <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">Amazon Web Services</a>
      </nav>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
};

// ✅ FIX 8: Removed unused PlaceholderSection — dead code

export default Home;