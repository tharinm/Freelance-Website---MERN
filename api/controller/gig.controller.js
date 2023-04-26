import gigModel from "../models/gig.model.js";
import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";


export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only seller can create gig"));

  const newGig = new gigModel({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (err) {
    next(err);
  }
};

// export const deleteGig = () => {};
//
// export const getGig = () => {};
//
// export const getGigs = () => {};
//
