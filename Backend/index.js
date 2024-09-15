import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { app } from "./app.js";

app.use(cors());
app.use(express.json());

dotenv.config({
  path: "./.env",
});
app.on("error", (error) => {
  console.error("Error:", error);
  throw error;
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed!", error);
  });

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
