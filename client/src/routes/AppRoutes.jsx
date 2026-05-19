
// import { Routes, Route } from "react-router-dom";

// /* ================= PAGES ================= */
// import Home        from "../pages/Home";
// import Blog from "./components/Blog/Blog";
// import AboutPage   from "../pages/AboutPage";
// import ServicesPage from "../pages/ServicesPage";
// import IndustriesPage from "../pages/IndustriesPage";
// import CareerPage  from "../pages/CareerPage";
// import BlogPost from "../pages/BlogPost";
// import BlogPage    from "../pages/BlogPage";
// import ContactPage from "../pages/ContactPage";
// import NotFound    from "../pages/NotFound";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* HOME — renders all homepage sections including Industries component */}
//       <Route path="/" element={<Home />} />

//       {/* ABOUT */}
//       <Route path="/about" element={<AboutPage />} />

//       {/* SERVICES */}
//       <Route path="/services" element={<ServicesPage />} />
//       <Route path="/services/:service" element={<ServicesPage />} />

//       {/* INDUSTRIES - Order matters! Put more specific routes first */}
// // ✅ More specific route FIRST
// <Route path="/industries/:industryId" element={<IndustriesPage />} />
// <Route path="/industries" element={<IndustriesPage />} />

//       {/* CAREER */}
//       <Route path="/career" element={<CareerPage />} />
//       <Route path="/careerpage" element={<CareerPage />} /> {/* lowercase for consistency */}

//       {/* BLOG */}
//       <Route path="/blog" element={<BlogPage />} />
//       <Route path="/blog/:id" element={<BlogPost />} />

//       {/* CONTACT */}
//       <Route path="/contact" element={<ContactPage />} />

//       {/* 404 */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// // export default AppRoutes;
// import { Routes, Route } from "react-router-dom";

// /* ================= PAGES ================= */
// import Home          from "../pages/Home";
// import AboutPage     from "../pages/AboutPage";
// import ServicesPage  from "../pages/ServicesPage";
// import IndustriesPage from "../pages/IndustriesPage";
// import CareerPage    from "../pages/CareerPage";
// import BlogPage      from "../pages/BlogPage";
// import ContactPage   from "../pages/ContactPage";
// import NotFound      from "../pages/NotFound";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* HOME */}
//       <Route path="/" element={<Home />} />

//       {/* ABOUT */}
//       <Route path="/about" element={<AboutPage />} />

//       {/* SERVICES */}
//       <Route path="/services" element={<ServicesPage />} />
//       <Route path="/services/:service" element={<ServicesPage />} />

//       {/* INDUSTRIES — specific route first */}
//       <Route path="/industries/:industryId" element={<IndustriesPage />} />
//       <Route path="/industries" element={<IndustriesPage />} />

//       {/* CAREER */}
//       <Route path="/career" element={<CareerPage />} />
//       <Route path="/careerpage" element={<CareerPage />} />

//       {/* BLOG */}
// {/* BLOG */}
// <Route path="/blog" element={<BlogPage />} />
// <Route path="/blog/:id" element={<BlogPage />} />   {/* ← add this */}

//       {/* CONTACT */}
//       <Route path="/contact" element={<ContactPage />} />

//       {/* 404 */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";

/* ================= PAGES ================= */
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import IndustriesPage from "../pages/IndustriesPage";
import CareerPage from "../pages/CareerPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* ABOUT */}
      <Route path="/about" element={<AboutPage />} />

      {/* SERVICES */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:service" element={<ServicesPage />} />

      {/* INDUSTRIES */}
      <Route
        path="/industries/:industryId"
        element={<IndustriesPage />}
      />
      <Route
        path="/industries"
        element={<IndustriesPage />}
      />

      {/* CAREER */}
      <Route path="/career" element={<CareerPage />} />
      <Route path="/careerpage" element={<CareerPage />} />

      {/* BLOG */}
      <Route path="/blog" element={<BlogPage />} />

      {/* CONTACT */}
      <Route path="/contact" element={<ContactPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;