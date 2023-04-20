import e from "express";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//mongoose.set('strictQuery',true)
const app = express();
dotenv.config()


try {
  await mongoose.connect(process.env.MONGO);
  console.log("MongoDB connected");
} catch (error) {
 console.log(error)
}



app.listen(8000, () => {
  console.log("Backend server is running!");
});
