// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Blog.css";

// const ArrowUpRight = () => (
//   <svg
//     viewBox="0 0 16 16"
//     fill="none"
//     className="blog__more-icon"
//     aria-hidden="true"
//     focusable="false"
//   >
//     <path
//       d="M3 13L13 3M13 3H6M13 3V10"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const blogs = [
//   {
//     id: 1,
//     category: "Data & AI",
//     title: "How Behavioral Data Can Transform Business Decision-Making",
//     excerpt:
//       "Learn how leading startups are using behavioral analytics to make smarter product and marketing decisions.",
//     date: "March 20, 2026",
//     readTime: "5 min read",
//     img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
//     alt: "Behavioral data analytics for business decisions — SkyLith Tech blog",
//   },
//   {
//     id: 2,
//     category: "Engineering",
//     title: "Smart Development Practices That Make Products Easier to Maintain",
//     excerpt:
//       "A practical guide to writing cleaner, scalable code that your future self will thank you for.",
//     date: "March 18, 2026",
//     readTime: "4 min read",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
//     alt: "Smart software development practices for maintainable products — SkyLith Tech",
//   },
//   {
//     id: 3,
//     category: "Design",
//     title: "Why UI/UX Design Is the Foundation of Every Successful Product",
//     excerpt:
//       "Great design isn't just aesthetics — it's the difference between products people love and products they abandon.",
//     date: "March 15, 2026",
//     readTime: "3 min read",
//     img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
//     alt: "UI UX design importance for digital product success — SkyLith Tech blog",
//   },
// ];

// const Blog = () => {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="blogs"
//       className={`blog ${inView ? "blog--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="blog-heading"
//       itemScope
//       itemType="https://schema.org/Blog"
//     >
//       <meta
//         itemProp="name"
//         content="SkyLith Tech Blog — Design, Engineering & Digital Strategy Insights"
//       />

//       <span className="blog__deco-diamond" aria-hidden="true">
//         ◆
//       </span>

//       <header className="blog__header">
//         <div className="blog__header-left">
//           <span className="blog__label">
//             <span
//               className="blog__label-line"
//               aria-hidden="true"
//             />
//             Insights & Ideas
//           </span>

//           <h2 className="blog__title" id="blog-heading">
//             Recent Posts
//           </h2>
//         </div>

//         <p className="blog__desc">
//           Practical reads on design, engineering, and building digital
//           products — written by the people who do it every day at
//           SkyLith Tech.
//         </p>

//         <Link
//           to="/blog"
//           className="blog__more-link"
//           aria-label="Read all SkyLith Tech blog posts and insights"
//           title="SkyLith Tech Blog — Design, Engineering & Digital Strategy"
//         >
//           More Articles <ArrowUpRight />
//         </Link>
//       </header>

//       <div className="blog__body">
//         {/* Featured Image */}
//         <div className="blog__image-wrap">
//           <Link
//             to="/blog"
//             aria-label={`Read: ${blogs[0].title}`}
//           >
//             <img
//               src={blogs[0].img}
//               alt={blogs[0].alt}
//               className="blog__main-image"
//               loading="lazy"
//               width="1200"
//               height="800"
//               decoding="async"
//               itemProp="image"
//             />

//             <div className="blog__image-tag">
//               {blogs[0].category}
//             </div>
//           </Link>
//         </div>

//         {/* Articles */}
//         <div className="blog__articles">
//           {blogs.map((blog, i) => (
//             <article
//               key={blog.id}
//               className={`blog__article ${
//                 inView ? "blog__article--visible" : ""
//               }`}
//               style={{
//                 animationDelay: `${i * 120}ms`,
//               }}
//               itemScope
//               itemType="https://schema.org/BlogPosting"
//             >
//               <meta itemProp="author" content="SkyLith Tech" />

//               <meta
//                 itemProp="datePublished"
//                 content={blog.date}
//               />

//               <Link
//                 to={`/blog/${blog.id}`}
//                 className="blog__article-link"
//                 aria-label={`Read: ${blog.title}`}
//                 itemProp="url"
//               >
//                 <span className="blog__article-label">
//                   <span
//                     className="blog__article-label-line"
//                     aria-hidden="true"
//                   />
//                   {blog.category}
//                 </span>

//                 <h3
//                   className="blog__article-title"
//                   itemProp="headline"
//                 >
//                   {blog.title}
//                 </h3>

//                 <p
//                   className="blog__article-excerpt"
//                   itemProp="description"
//                 >
//                   {blog.excerpt}
//                 </p>

//                 <div className="blog__article-meta">
//                   <time
//                     className="blog__article-date"
//                     dateTime={blog.date}
//                     itemProp="datePublished"
//                   >
//                     {blog.date}
//                   </time>

//                   <span
//                     className="blog__meta-dot"
//                     aria-hidden="true"
//                   />

//                   <span className="blog__article-read">
//                     {blog.readTime}
//                   </span>

//                   <span
//                     className="blog__article-arrow"
//                     aria-hidden="true"
//                   >
//                     →
//                   </span>
//                 </div>
//               </Link>

//               {i !== blogs.length - 1 && (
//                 <div
//                   className="blog__article-divider"
//                   aria-hidden="true"
//                 />
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { blogData } from "../../data/blogData";
// import "./Blog.css";

// const ArrowUpRight = () => (
//   <svg
//     viewBox="0 0 16 16"
//     fill="none"
//     className="blog__more-icon"
//     aria-hidden="true"
//     focusable="false"
//   >
//     <path
//       d="M3 13L13 3M13 3H6M13 3V10"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// // Show only first 3 blogs on homepage
// const blogs = blogData.slice(0, 3);

// const Blog = () => {
//   const sectionRef = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="blogs"
//       className={`blog ${inView ? "blog--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="blog-heading"
//       itemScope
//       itemType="https://schema.org/Blog"
//     >
//       <meta
//         itemProp="name"
//         content="SkyLith Tech Blog — Design, Engineering & Digital Strategy Insights"
//       />

//       <span className="blog__deco-diamond" aria-hidden="true">
//         ◆
//       </span>

//       <header className="blog__header">
//         <div className="blog__header-left">
//           <span className="blog__label">
//             <span className="blog__label-line" aria-hidden="true" />
//             Insights &amp; Ideas
//           </span>

//           <h2 className="blog__title" id="blog-heading">
//             Recent Posts
//           </h2>
//         </div>

//         <p className="blog__desc">
//           Practical reads on design, engineering, and building digital
//           products — written by the people who do it every day at SkyLith Tech.
//         </p>

//         <Link
//           to="/blog"
//           className="blog__more-link"
//           aria-label="Read all SkyLith Tech blog posts and insights"
//           title="SkyLith Tech Blog — Design, Engineering & Digital Strategy"
//         >
//           More Articles <ArrowUpRight />
//         </Link>
//       </header>

//       <div className="blog__body">
//         {/* Featured Image — links to the first blog post directly */}
// <div className="blog__image-wrap">
//   <Link
//     to="/blog"
//     aria-label={`Read: ${blogs[0].title}`}
//   >
//     <img
//       src={blogs[0].image}
//       alt={blogs[0].title}
//       className="blog__main-image"
//       loading="lazy"
//       width="1200"
//       height="800"
//       decoding="async"
//       itemProp="image"
//     />
//     <div className="blog__image-tag">{blogs[0].category}</div>
//   </Link>
// </div>

//         {/* Articles list */}
//         <div className="blog__articles">
//           {blogs.map((blog, i) => (
//             <article
//               key={blog.id}
//               className={`blog__article ${inView ? "blog__article--visible" : ""}`}
//               style={{ animationDelay: `${i * 120}ms` }}
//               itemScope
//               itemType="https://schema.org/BlogPosting"
//             >
//               <meta itemProp="author" content="SkyLith Tech" />
//               <meta itemProp="datePublished" content={blog.date} />

// <Link
//   to="/blog"
//   className="blog__article-link"
//   aria-label={`Read: ${blog.title}`}
//   itemProp="url"
// >
//                 <span className="blog__article-label">
//                   <span className="blog__article-label-line" aria-hidden="true" />
//                   {blog.category}
//                 </span>

//                 <h3 className="blog__article-title" itemProp="headline">
//                   {blog.title}
//                 </h3>

//                 <p className="blog__article-excerpt" itemProp="description">
//                   {blog.description}
//                 </p>

//                 <div className="blog__article-meta">
//                   <time
//                     className="blog__article-date"
//                     dateTime={blog.date}
//                     itemProp="datePublished"
//                   >
//                     {blog.date}
//                   </time>

//                   <span className="blog__meta-dot" aria-hidden="true" />

//                   <span className="blog__article-read">{blog.readTime}</span>

//                   <span className="blog__article-arrow" aria-hidden="true">
//                     →
//                   </span>
//                 </div>
//               </Link>

//               {i !== blogs.length - 1 && (
//                 <div className="blog__article-divider" aria-hidden="true" />
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../data/blogData";
import "./Blog.css";

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className="blog__more-icon"
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
);

// Memoized blog data - show first 3 blogs
const blogs = blogData.slice(0, 3);

// Helper to format date for Schema.org
const formatDateForSchema = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  } catch {
    return dateStr;
  }
};

// Generate JSON-LD structured data for SEO
const generateBlogJsonLd = (blogsList) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Bluelith Tech Blog — Design, Engineering & Digital Strategy Insights",
  "description": "Practical reads on design, engineering, and building digital products — written by the people who do it every day at Bluelith Tech.",
  "url": "https://bluelith.in/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Bluelith Technology",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bluelith.in/logo.png"
    }
  },
  "blogPost": blogsList.map((post, idx) => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": formatDateForSchema(post.date),
    "dateModified": formatDateForSchema(post.date),
    "author": {
      "@type": "Organization",
      "name": "Bluelith Tech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bluelith Technology"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bluelith.in/blog#post-${post.id}`
    },
    "image": {
      "@type": "ImageObject",
      "url": post.image
    },
    "category": post.category,
    "keywords": post.tags?.join(", ") || post.category
  }))
});

const Blog = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Intersection Observer with lower threshold for faster response
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Track image load for performance logging
  const handleImageLoad = useCallback((id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  }, []);

  // Generate JSON-LD memoized
  const jsonLd = useMemo(() => generateBlogJsonLd(blogs), []);

  // Preload critical images when section is near
  useEffect(() => {
    if (inView) {
      // Preload main image
      const img = new Image();
      img.src = blogs[0]?.image;
      
      // Preload first article image if available
      if (blogs[0]?.image) {
        const img2 = new Image();
        img2.src = blogs[0].image;
      }
    }
  }, [inView]);

  // Memoized article count for accessibility
  const articleCount = blogs.length;

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section
        id="blogs"
        className={`blog ${inView ? "blog--visible" : ""}`}
        ref={sectionRef}
        aria-labelledby="blog-heading"
        itemScope
        itemType="https://schema.org/Blog"
      >
        <meta itemProp="name" content="Bluelith Tech Blog — Design, Engineering & Digital Strategy Insights" />
        <meta itemProp="description" content="Practical reads on design, engineering, and building digital products — written by the people who do it every day at Bluelith Tech." />
        <meta itemProp="numberOfItems" content={String(articleCount)} />

        <span className="blog__deco-diamond" aria-hidden="true">◆</span>

        <header className="blog__header">
          <div className="blog__header-left">
            <span className="blog__label">
              <span className="blog__label-line" aria-hidden="true" />
              Insights &amp; Ideas
            </span>

            <h2 className="blog__title" id="blog-heading">
              Recent <span className="blog__title-accent">Posts</span>
            </h2>
          </div>

          <p className="blog__desc">
            Practical reads on design, engineering, and building digital
            products — written by the people who do it every day at Bluelith Tech.
          </p>

          <Link
            to="/blog"
            className="blog__more-link"
            aria-label="Read all Bluelith Tech blog posts and insights"
            title="Bluelith Tech Blog — Design, Engineering & Digital Strategy"
          >
            More Articles <ArrowUpRight />
          </Link>
        </header>

        <div className="blog__body">
          {/* Featured Image — links to the first blog post directly */}
          <div className="blog__image-wrap">
            <Link
              to="/blog"
              aria-label={`Read featured article: ${blogs[0]?.title}`}
              itemProp="url"
            >
              <picture>
                <source 
                  srcSet={blogs[0]?.image?.replace(/\.(jpg|jpeg|png)/i, '.webp') || blogs[0]?.image} 
                  type="image/webp" 
                />
                <img
                  src={blogs[0]?.image}
                  alt={blogs[0]?.title || "Featured blog post image"}
                  className="blog__main-image"
                  loading="eager"
                  width="1200"
                  height="800"
                  decoding="async"
                  itemProp="image"
                  onLoad={() => handleImageLoad('featured')}
                />
              </picture>
              <div className="blog__image-tag">{blogs[0]?.category}</div>
            </Link>
          </div>

          {/* Articles list */}
          <div className="blog__articles">
            {blogs.map((blog, i) => (
              <article
                key={blog.id}
                className={`blog__article ${inView ? "blog__article--visible" : ""}`}
                style={{ animationDelay: `${i * 100}ms` }}
                itemScope
                itemType="https://schema.org/BlogPosting"
                itemProp="blogPost"
              >
                <meta itemProp="author" content="Bluelith Tech" />
                <meta itemProp="datePublished" content={formatDateForSchema(blog.date)} />
                <meta itemProp="dateModified" content={formatDateForSchema(blog.date)} />
                {blog.tags && blog.tags.map((tag, idx) => (
                  <meta key={idx} itemProp="keywords" content={tag} />
                ))}

                <Link
                  to="/blog"
                  className="blog__article-link"
                  aria-label={`Read article: ${blog.title}`}
                  itemProp="url"
                >
                  <span className="blog__article-label">
                    <span className="blog__article-label-line" aria-hidden="true" />
                    {blog.category}
                  </span>

                  <h3 className="blog__article-title" itemProp="headline">
                    {blog.title}
                  </h3>

                  <p className="blog__article-excerpt" itemProp="description">
                    {blog.description}
                  </p>

                  <div className="blog__article-meta">
                    <time
                      className="blog__article-date"
                      dateTime={formatDateForSchema(blog.date)}
                      itemProp="datePublished"
                    >
                      {blog.date}
                    </time>

                    <span className="blog__meta-dot" aria-hidden="true" />

                    <span className="blog__article-read">{blog.readTime}</span>

                    <span className="blog__article-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>

                {i !== blogs.length - 1 && (
                  <div className="blog__article-divider" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;