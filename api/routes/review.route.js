import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createReview, getReviews,deleteReview } from "../controller/review.controller.js";

const route = express.Router();

//create review
route.post("/", verifyToken, createReview);
route.get("/:gigId", verifyToken, getReviews);
route.delete("/:id",verifyToken,deleteReview)


export default route;

