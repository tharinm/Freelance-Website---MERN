import express from "express";
import { deleteUser } from "../controller/user.contoller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/register");
router.get("/login");

router.delete("/:id", verifyToken, deleteUser);

export default router;
