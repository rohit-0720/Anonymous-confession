import rateLimit from "express-rate-limit";

// Limit: 5 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  message: {
    message: "Too many requests, please try again later.",
  },
});

export default limiter;
