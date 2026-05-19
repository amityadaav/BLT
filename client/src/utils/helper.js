/* ================= FORMAT DATE ================= */

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/* ================= SCROLL TO SECTION ================= */

export const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

/* ================= TRUNCATE TEXT ================= */

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};