import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  updatedConversations,
  getSingleConversations,
  getConversations,
} from "../controller/conversation.controller.js";

const route = express.Router();

route.get("/", verifyToken, getConversations);
route.post("/", verifyToken, createConversation);
route.get("/single/:id", verifyToken, getSingleConversations);
route.put("/:id", verifyToken, updatedConversations);

export default route;
