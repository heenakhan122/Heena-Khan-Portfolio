import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Security headers and CSP
app.use(helmet({
  contentSecurityPolicy: app.get("env") === "development" ? false : {
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      frameAncestors: ["'none'"],
    },
  },
  hsts: app.get("env") === "production" ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
}));
// Rate limiting for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { message: "Too many requests from this IP, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", apiLimiter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Secure logging middleware - only log request metadata, not response bodies
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      const logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Secure error handler - don't leak error details in production
  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    
    // Log the full error server-side for debugging
    console.error(`Error ${status} on ${req.method} ${req.path}:`, err);
    
    // Only send generic error message to client in production
    const message = app.get("env") === "production" 
      ? "Internal Server Error" 
      : (err.message || "Internal Server Error");

    res.status(status).json({ message });
  });

  // Setup vite in development and static serving in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve the app on the port specified in environment variable PORT
  const port = parseInt(process.env.PORT || '5173', 10);
  server.listen({
    port,
    host: "127.0.0.1",
    
  }, () => {
    log(`serving on port ${port}`);
  });
})();
