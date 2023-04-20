import e from "express";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//mongoose.set('strictQuery',true)
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8000, () => {
  connect();
  console.log("Backend server is running!");
});
