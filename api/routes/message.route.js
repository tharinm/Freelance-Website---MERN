import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createMessage,
  getMessages,
} from "../controller/message.controller.js";

const route = express.Router();

route.post("/", verifyToken, createMessage);
route.get("/:id", verifyToken, getMessages);


export default route;
