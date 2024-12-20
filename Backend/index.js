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

// CORS configuration
const allowedOrigins = [
  'https://ai-anveshak.onrender.com',
  process.env.FRONTEND_URL || 'https://ai-anveshak.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS Error: ${origin} not allowed`));
    }
  },
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send("Backend is healthy");
});

// Routes
app.use("/anvesh", anveshRoute);
app.use("/user", userRoute);

// Fallback route
app.all('*', (req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
