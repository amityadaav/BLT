// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const rateLimit = require("express-rate-limit");
// const path = require("path");
// require("dotenv").config();

// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contact");
// const projectRoutes = require("./routes/project");
// const careerRoutes = require("./routes/career");

// const app = express();

// // ── Connect to MongoDB ──
// connectDB();

// // ── Security Middleware ──
// app.use(helmet());

// // ── CORS ──
// const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
//   .split(",")
//   .map((o) => o.trim());

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error(`CORS blocked: ${origin}`));
//       }
//     },
//     credentials: true,
//   })
// );

// // ── Body Parsing ──
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// // ── Logging (dev only) ──
// if (process.env.NODE_ENV !== "production") {
//   app.use(morgan("dev"));
// }

// // ── Global Rate Limiter ──
// const globalLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100,
//   standardHeaders: true,
//   legacyHeaders: false,
//   message: { error: "Too many requests. Please try again later." },
// });
// app.use(globalLimiter);

// // ── Serve Uploaded Files ──
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ── Routes ──
// app.use("/api/contact", contactRoutes);
// app.use("/api/project", projectRoutes);
// app.use("/api/career", careerRoutes);

// // ── Health Check ──
// app.get("/api/health", (req, res) => {
//   res.json({
//     status: "ok",
//     timestamp: new Date().toISOString(),
//     environment: process.env.NODE_ENV || "development",
//   });
// });

// // ── 404 Handler ──
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found." });
// });

// // ── Global Error Handler ──
// app.use((err, req, res, next) => {
//   console.error("Server error:", err.message);
//   res.status(err.status || 500).json({
//     error: err.message || "Internal server error.",
//   });
// });

// // ── Start Server ──
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`\nServer running on http://localhost:${PORT}`);
//   console.log(`Environment: ${process.env.NODE_ENV || "development"}\n`);
// });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

/* ─────────────────────────────────────────────
   DATABASE
───────────────────────────────────────────── */
const connectDB = require("./config/db");

/* ─────────────────────────────────────────────
   ROUTES
───────────────────────────────────────────── */
const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/project");
const careerRoutes = require("./routes/career");

/* ─────────────────────────────────────────────
   APP INIT
───────────────────────────────────────────── */
const app = express();

/* ─────────────────────────────────────────────
   CONNECT DATABASE
───────────────────────────────────────────── */
connectDB();

/* ─────────────────────────────────────────────
   TRUST PROXY
───────────────────────────────────────────── */
app.set("trust proxy", 1);

/* ─────────────────────────────────────────────
   SECURITY
───────────────────────────────────────────── */
app.use(helmet());

/* ─────────────────────────────────────────────
   CORS CONFIG
───────────────────────────────────────────── */
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://bluelith.vercel.app",
  ],

  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  credentials: true,
};

/* ─────────────────────────────────────────────
   ENABLE CORS
───────────────────────────────────────────── */
app.use(cors(corsOptions));

/* ─────────────────────────────────────────────
   HANDLE PREFLIGHT REQUESTS
───────────────────────────────────────────── */
app.options("*", cors(corsOptions));

/* ─────────────────────────────────────────────
   BODY PARSER
───────────────────────────────────────────── */
app.use(express.json({ limit: "10mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

/* ─────────────────────────────────────────────
   LOGGER
───────────────────────────────────────────── */
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

/* ─────────────────────────────────────────────
   RATE LIMITER
───────────────────────────────────────────── */
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 100,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    error:
      "Too many requests. Please try again later.",
  },
});

app.use(globalLimiter);

/* ─────────────────────────────────────────────
   STATIC FILES
───────────────────────────────────────────── */
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

/* ─────────────────────────────────────────────
   ROOT ROUTE
───────────────────────────────────────────── */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BlueLith API Running ",
  });
});

/* ─────────────────────────────────────────────
   HEALTH CHECK
───────────────────────────────────────────── */
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Server is running",
    environment:
      process.env.NODE_ENV || "development",

    timestamp: new Date().toISOString(),
  });
});

/* ─────────────────────────────────────────────
   API ROUTES
───────────────────────────────────────────── */
app.use("/api/contact", contactRoutes);

app.use("/api/project", projectRoutes);

app.use("/api/career", careerRoutes);

/* ─────────────────────────────────────────────
   404 HANDLER
───────────────────────────────────────────── */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

/* ─────────────────────────────────────────────
   GLOBAL ERROR HANDLER
───────────────────────────────────────────── */
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:");
  console.error(err);

  res.status(err.status || 500).json({
    success: false,

    error:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});

/* ─────────────────────────────────────────────
   SERVER
───────────────────────────────────────────── */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
Server running on port ${PORT}
Environment: ${process.env.NODE_ENV || "development"}
`);
});