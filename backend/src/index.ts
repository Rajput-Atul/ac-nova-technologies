import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact";
import quoteRoutes from "./routes/quote";
import newsletterRoutes from "./routes/newsletter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security Middleware
app.use(helmet());

// CORS Configuration - Secure whitelist instead of wildcards
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://localhost:3001",
  // Add production domains here
  // "https://yourdomain.com",
  // "https://www.yourdomain.com",
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl requests)
      if (!origin) {
        callback(null, true);
      } else if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS: Origin not allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept"],
    maxAge: 3600,
  })
);

app.use(express.json({ limit: "10kb" })); // Limit JSON payload size
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Global rate limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", globalLimiter);

// Per-endpoint rate limiters for sensitive operations
const contactFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour per IP
  message: { success: false, message: "Too many contact form submissions. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const newsletterLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 2, // 2 subscriptions per 24 hours per IP
  message: { success: false, message: "You've already subscribed. Check your email." },
  standardHeaders: true,
  legacyHeaders: false,
});

const quoteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 quote requests per hour per IP
  message: { success: false, message: "Too many quote requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

// Routes with rate limiting
app.use("/api/contact", contactFormLimiter, contactRoutes);
app.use("/api/quote", quoteLimiter, quoteRoutes);
app.use("/api/newsletter", newsletterLimiter, newsletterRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Don't expose error details to client
  const errorMsg = err?.message || "Unknown error";
  console.error("[ERROR]", errorMsg.substring(0, 50));
  res.status(500).json({ success: false, message: "Internal server error" });
});

// Start server on localhost only in production (use reverse proxy)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});