import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function AboutPage() {
  return (
    <>
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