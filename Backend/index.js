import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import anveshRoute from './route/anvesh.route.js';
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from allowed origins or undefined (e.g., Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));
app.use(express.json());

// Connect to MongoDB without deprecated options
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define routes
app.use("/anvesh", anveshRoute);
app.use("/user", userRoute);

// Fallback for unsupported routes
app.all('*', (req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
