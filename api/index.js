import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
// use for hiding DB info
import dotenv from "dotenv";

dotenv.config();
// Database Setup
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Server SetUp
const app = express();

app.use(express.json()); //this is telling Express to use the express.json() middleware for all incoming requests, enabling automatic parsing of JSON request bodies.

app.listen(3000, () => {
  console.log("Server is running at Port: 3000");
});

// Routes Setup

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
