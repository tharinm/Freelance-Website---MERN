import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";


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
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage)

})

app.listen(8000, () => {
  connect();
  console.log("Backend server is running!");
});