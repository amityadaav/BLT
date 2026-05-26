import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { Helmet } from 'react-helmet-async'
function AboutPage() {
  return (
    <>
    <Helmet>
  <title>About Bluelith Technology | Software &amp; IT Company Bengaluru | Our Story</title>
  <meta name="description" content="Learn about Bluelith Technology — a software and IT company in Bengaluru building AI-powered digital products. Meet our team, our values, and our mission to help startups and enterprises worldwide." />
  <meta name="keywords" content="about Bluelith Technology, software company Bengaluru team, IT company Bangalore story, tech company India, Bluelith founders, software engineering company Bengaluru" />
  <link rel="canonical" href="https://www.bluelith.in/about" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.bluelith.in/about" />
  <meta property="og:title" content="About Bluelith Technology | Software Company in Bengaluru" />
  <meta property="og:description" content="We are Bluelith Technology — a Bengaluru-based software and IT company building AI-powered digital products for ambitious startups and enterprises worldwide." />
  <meta property="og:image" content="https://www.bluelith.in/og-about.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Bluelith Technology | Software Company Bengaluru" />
  <meta name="twitter:description" content="Meet the team behind Bluelith Technology — Bengaluru's software and IT company building AI-powered digital products for global clients." />
  <meta name="twitter:image" content="https://www.bluelith.in/og-about.jpg" />
</Helmet>

      <Navbar />

      <section className="page-section">
        <div className="container">
          <h1>About Us</h1>

          <p>
            We build modern digital products and
            scalable software solutions for startups
            and enterprises.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;