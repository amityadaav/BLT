// /**
//  * Input validation middleware
//  */

// // Basic sanitize — strips HTML tags to prevent XSS stored in DB
// const sanitize = (str) =>
//   typeof str === "string" ? str.replace(/<[^>]*>/g, "").trim() : str;

// // ── Contact / Consultation / Conversation ──
// exports.validateContact = (req, res, next) => {
//   let { name, email, phone, message, company, industry, subject } = req.body;

//   // Required fields
//   if (!name || !email || !message) {
//     return res
//       .status(400)
//       .json({ error: "Name, email, and message are required." });
//   }

//   // Email format
//   const emailRegex = /^\S+@\S+\.\S+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ error: "Invalid email address." });
//   }

//   // Length limits
//   if (name.length > 100)
//     return res.status(400).json({ error: "Name is too long (max 100 chars)." });
//   if (message.length > 2000)
//     return res
//       .status(400)
//       .json({ error: "Message is too long (max 2000 chars)." });

//   // Sanitize and write back
//   req.body.name = sanitize(name);
//   req.body.email = sanitize(email).toLowerCase();
//   req.body.phone = sanitize(phone || "");
//   req.body.message = sanitize(message);
//   req.body.company = sanitize(company || "");
//   req.body.industry = sanitize(industry || "");
//   req.body.subject = sanitize(subject || "General Inquiry");

//   next();
// };

// // ── Start Project ──
// exports.validateProject = (req, res, next) => {
//   let { name, email, company, budget, projectType, message } = req.body;

//   if (!name || !email || !message) {
//     return res
//       .status(400)
//       .json({ error: "Name, email, and project description are required." });
//   }

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ error: "Invalid email address." });
//   }

//   const validBudgets = ["5k-10k", "10k-25k", "25k-50k", "50k+", ""];
//   if (budget && !validBudgets.includes(budget)) {
//     return res.status(400).json({ error: "Invalid budget selection." });
//   }

//   const validTypes = ["website", "mobile-app", "uiux", "branding", "custom", ""];
//   if (projectType && !validTypes.includes(projectType)) {
//     return res.status(400).json({ error: "Invalid project type." });
//   }

//   req.body.name = sanitize(name);
//   req.body.email = sanitize(email).toLowerCase();
//   req.body.company = sanitize(company || "");
//   req.body.budget = budget || "";
//   req.body.projectType = projectType || "";
//   req.body.message = sanitize(message);

//   next();
// };

// // ── Career Application (text fields only — file handled by multer) ──
// exports.validateCareer = (req, res, next) => {
//   let { fullName, email, phone, position, experience, currentCompany, portfolio, message } =
//     req.body;

//   if (!fullName || !email || !phone || !position || !experience) {
//     return res.status(400).json({
//       error: "Full name, email, phone, position and experience are required.",
//     });
//   }

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ error: "Invalid email address." });
//   }

//   const validExp = ["0-1", "1-3", "3-5", "5-8", "8+"];
//   if (!validExp.includes(experience)) {
//     return res.status(400).json({ error: "Invalid experience range." });
//   }

//   req.body.fullName = sanitize(fullName);
//   req.body.email = sanitize(email).toLowerCase();
//   req.body.phone = sanitize(phone);
//   req.body.position = sanitize(position);
//   req.body.currentCompany = sanitize(currentCompany || "");
//   req.body.portfolio = sanitize(portfolio || "");
//   req.body.message = sanitize(message || "");

//   next();
// };
/**
 * Input validation middleware
 */

// Strip HTML tags to prevent XSS stored in DB
const sanitize = (str) =>
  typeof str === "string" ? str.replace(/<[^>]*>/g, "").trim() : str;

// Normalize phone: remove spaces, dashes, brackets, plus signs
const normalizePhone = (phone) =>
  typeof phone === "string" ? phone.replace(/[\s\-().+]/g, "") : phone;

// ── Contact / Consultation / Conversation ──
exports.validateContact = (req, res, next) => {
  let { name, email, phone, message, company, industry, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (name.length > 100)
    return res.status(400).json({ error: "Name is too long (max 100 chars)." });
  if (message.length > 2000)
    return res.status(400).json({ error: "Message is too long (max 2000 chars)." });

  req.body.name     = sanitize(name);
  req.body.email    = sanitize(email).toLowerCase();
  req.body.phone    = sanitize(phone || "");
  req.body.message  = sanitize(message);
  req.body.company  = sanitize(company || "");
  req.body.industry = sanitize(industry || "");
  req.body.subject  = sanitize(subject || "General Inquiry");

  next();
};

// ── Start Project ──
exports.validateProject = (req, res, next) => {
  let { name, email, company, budget, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and project description are required." });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const validBudgets = ["5k-10k", "10k-25k", "25k-50k", "50k+", ""];
  if (budget && !validBudgets.includes(budget)) {
    return res.status(400).json({ error: "Invalid budget selection." });
  }

  const validTypes = ["website", "mobile-app", "uiux", "branding", "custom", ""];
  if (projectType && !validTypes.includes(projectType)) {
    return res.status(400).json({ error: "Invalid project type." });
  }

  req.body.name        = sanitize(name);
  req.body.email       = sanitize(email).toLowerCase();
  req.body.company     = sanitize(company || "");
  req.body.budget      = budget || "";
  req.body.projectType = projectType || "";
  req.body.message     = sanitize(message);

  next();
};

// ── Career Application (text fields only — file handled by multer) ──
exports.validateCareer = (req, res, next) => {
  let { fullName, email, phone, position, experience, currentCompany, portfolio, message } =
    req.body;

  if (!fullName || !email || !phone || !position || !experience) {
    return res.status(400).json({
      error: "Full name, email, phone, position and experience are required.",
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const validExp = ["0-1", "1-3", "3-5", "5-8", "8+"];
  if (!validExp.includes(experience)) {
    return res.status(400).json({ error: "Invalid experience range." });
  }

  // Normalize & sanitize
  req.body.fullName       = sanitize(fullName).replace(/\s+/g, " ");   // collapse extra spaces
  req.body.email          = sanitize(email).toLowerCase();
  req.body.phone          = normalizePhone(sanitize(phone));            // strip formatting chars
  req.body.position       = sanitize(position);
  req.body.currentCompany = sanitize(currentCompany || "");
  req.body.portfolio      = sanitize(portfolio || "");
  req.body.message        = sanitize(message || "");

  next();
};