
import React, { useState, useEffect } from "react";
import { blogData } from "../data/blogData";
import "./BlogPage.css";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

/* ─── Icons ────────────────────────────────────────────── */
const ArrowLeft = () => (
  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
    <path d="M13 8H3M3 8L7 4M3 8L7 12"
      stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" width="13" height="13" aria-hidden="true">
    <path d="M3 13L13 3M13 3H6M13 3V10"
      stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="12" height="12" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

/* ─── Blog Listing ─────────────────────────────────────── */
const BlogListing = ({ setSelectedBlog }) => {
  const categories = ["All", ...Array.from(new Set(blogData.map(b => b.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? blogData : blogData.filter(b => b.category === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="bp-list">

      {/* Header */}
      <header className="bp-list__header">
        <div className="bp-list__header-left">
          <span className="bp-list__label">
            <span className="bp-list__label-line" />
            Insights &amp; Ideas
          </span>
          <h1 className="bp-list__title">
            The BlueLith <em>Blog</em>
          </h1>
        </div>

        <p className="bp-list__sub">
          Practical reads on design, engineering, and building digital
          products — written by the people who do it every day.
        </p>

        <p className="bp-list__count">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        </p>
      </header>

      {/* Filters */}
      <div className="bp-filters" role="group" aria-label="Filter by category">
        {categories.map(cat => (
          <button
            key={cat}
            className={`bp-filter-btn${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <div
          className="bp-featured"
          onClick={() => setSelectedBlog(featured)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && setSelectedBlog(featured)}
          aria-label={`Read featured article: ${featured.title}`}
        >
          <div className="bp-featured__img-wrap">
            <img src={featured.image} alt={featured.title} loading="lazy" />
            <span className="bp-featured__badge">Featured</span>
          </div>

          <div className="bp-featured__body">
            <span className="bp-featured__eyebrow">{featured.category}</span>
            <h2 className="bp-featured__h">{featured.title}</h2>
            <p className="bp-featured__desc">{featured.description}</p>
            <div className="bp-featured__meta">
              <time dateTime={featured.date}>{featured.date}</time>
              <span className="bp-featured__meta-dot" />
              <span><ClockIcon /> {featured.readTime}</span>
            </div>
            <span className="bp-featured__read-more">
              Read Article <ArrowRight />
            </span>
          </div>
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="bp-grid">
          {rest.map((blog, i) => (
            <div
              key={blog.id}
              className="bp-card"
              onClick={() => setSelectedBlog(blog)}
              style={{ animationDelay: `${i * 75}ms` }}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setSelectedBlog(blog)}
              aria-label={`Read: ${blog.title}`}
            >
              <div className="bp-card__img-wrap">
                <img src={blog.image} alt={blog.title} loading="lazy" />
                <span className="bp-card__cat">{blog.category}</span>
              </div>

              <div className="bp-card__body">
                <h2 className="bp-card__title">{blog.title}</h2>
                <p className="bp-card__desc">{blog.description}</p>
                <div className="bp-card__meta">
                  <time dateTime={blog.date}>{blog.date}</time>
                  <span className="bp-card__meta-dot" />
                  <span className="bp-card__meta-time">
                    <ClockIcon /> {blog.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="bp-empty">
          <p className="bp-empty__title">No posts here yet.</p>
          <p>Try a different category or check back soon.</p>
        </div>
      )}
    </div>
  );
};

/* ─── Single Post ──────────────────────────────────────── */
const BlogPost = ({ blog, setSelectedBlog }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog]);

  if (!blog) return null;

  const related = blogData
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <article className="bp-post" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="author" content="SkyLith Tech" />
      <meta itemProp="datePublished" content={blog.date} />

      {/* Breadcrumb */}
      <nav className="bp-post__breadcrumb" aria-label="Breadcrumb">
        <button onClick={() => setSelectedBlog(null)} aria-label="Back to all posts">
          <ArrowLeft /> Blog
        </button>
        <span className="bp-post__breadcrumb-sep">›</span>
        <span>{blog.category}</span>
      </nav>

      {/* Category tag */}
      <span className="bp-post__cat">
        <span className="bp-post__cat-line" />
        {blog.category}
      </span>

      {/* Title */}
      <h1 className="bp-post__title" itemProp="headline">{blog.title}</h1>

      {/* Meta */}
      <div className="bp-post__meta">
        <span itemProp="author">BlueLith Tech</span>
        <span className="bp-post__meta-dot" />
        <time dateTime={blog.date} itemProp="datePublished">{blog.date}</time>
        <span className="bp-post__meta-dot" />
        <span className="bp-post__meta-time"><ClockIcon /> {blog.readTime}</span>
      </div>

      {/* Cover */}
      <img
        src={blog.image}
        alt={blog.title}
        className="bp-post__cover"
        loading="eager"
        itemProp="image"
      />

      {/* Intro */}
      {blog.fullContent?.intro && (
        <p className="bp-post__intro" itemProp="abstract">
          {blog.fullContent.intro}
        </p>
      )}

      {/* Sections */}
      {blog.fullContent?.sections?.map((sec, i) => (
        <div key={i} className="bp-post__section">
          <h2 className="bp-post__section-heading">{sec.heading}</h2>
          <p className="bp-post__section-body">{sec.body}</p>
        </div>
      ))}

      {/* Conclusion */}
      {blog.fullContent?.conclusion && (
        <div className="bp-post__conclusion">
          <p className="bp-post__conclusion-label">Takeaway</p>
          <p className="bp-post__conclusion-text">{blog.fullContent.conclusion}</p>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <aside className="bp-related" aria-label="Related posts">
          <p className="bp-related__label">More in {blog.category}</p>
          <div className="bp-related__grid">
            {related.map(r => (
              <div
                key={r.id}
                className="bp-related__card"
                onClick={() => setSelectedBlog(r)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && setSelectedBlog(r)}
                aria-label={`Read: ${r.title}`}
              >
                <img src={r.image} alt={r.title} loading="lazy" />
                <div className="bp-related__card-body">
                  <p className="bp-related__card-cat">{r.category}</p>
                  <p className="bp-related__card-title">{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
};

/* ─── Root ─────────────────────────────────────────────── */
const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bp-root">
      <Navbar />
      {selectedBlog
        ? <BlogPost blog={selectedBlog} setSelectedBlog={setSelectedBlog} />
        : <BlogListing setSelectedBlog={setSelectedBlog} />
      }
      <Footer />
    </div>
  );
};

export default BlogPage;