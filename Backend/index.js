import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import anveshRoute from './route/anvesh.route.js';
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("Error: ", error));

// Define routes
app.use("/anvesh", anveshRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
