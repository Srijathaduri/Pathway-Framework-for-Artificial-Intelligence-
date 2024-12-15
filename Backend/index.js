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

// CORS configuration to allow your frontend's origin
const allowedOrigins = [
  'http://localhost:5173',  // Local development frontend URL
  process.env.FRONTEND_URL || 'http://localhost:5173',  // Environment variable for production or staging
];

app.use(cors({
  origin: (origin, callback) => {
    // If no origin is present (like in Postman or server-side requests), allow the request
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);  // Allow the request
    } else {
      callback(new Error("Not allowed by CORS"));  // Reject the request
    }
  },
}));

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB: ", error));

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
