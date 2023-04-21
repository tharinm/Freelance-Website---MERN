import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


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

//to read json files
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(8000, () => {
  connect();
  console.log("Backend server is running!");
});
