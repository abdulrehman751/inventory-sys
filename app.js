import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import userProducts from "./routes/userProducts.js";
import { protect } from "./middleware/authMiddleware.js";
const app = express();
app.use(cors());

// OR allow specific frontend only
app.use(
  cors({
    origin: "http://localhost:3000", // frontend ka URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

app.use(express.json());

// Routes

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/users", userRoutes);
app.use("/api/products", protect, userProducts);
// middleware
import errorHandler from"./middleware/errorMiddleware.js";
 app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
