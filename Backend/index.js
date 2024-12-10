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

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB: ", error));

// Define routes
app.use("/anvesh", anveshRoute);
app.use("/user", userRoute);
 // Add contact route

// Fallback for unsupported routes
app.all('*', (req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
