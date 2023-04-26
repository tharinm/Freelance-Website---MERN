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

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);
    if (gig.userId == req.userId) {
      await gigModel.findByIdAndDelete(req.params.id);
      return res.status(200).send("deleted");
    } else {
      return next(createError(403, "You can delete your gig only"));
    }
  } catch (err) {
    console.log(err);
  }
};

// export const getGig = () => {};
//
// export const getGigs = () => {};
//
