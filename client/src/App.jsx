
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= COMMON COMPONENTS ================= */
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

/* ================= PAGES ================= */
import Home         from "./pages/Home";
import AboutPage    from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";  // ← was missing
import CareerPage   from "./pages/CareerPage";
import BlogPage     from "./pages/BlogPage";
import ContactPage  from "./pages/ContactPage";
import NotFound     from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/"        element={<Home />} />

        {/* ABOUT */}
        <Route path="/about"   element={<AboutPage />} />

        {/* SERVICES */}
        <Route path="/services"          element={<ServicesPage />} />
        <Route path="/services/:service" element={<ServicesPage />} />

        {/* INDUSTRIES — specific route must come before the generic one */}
        <Route path="/industries/:industryId" element={<IndustriesPage />} />
        <Route path="/industries"             element={<IndustriesPage />} />

        {/* CAREERS */}
        <Route path="/careers" element={<CareerPage />} />

        {/* BLOG */}
        <Route path="/blog"    element={<BlogPage />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 */}
        <Route path="*"        element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;