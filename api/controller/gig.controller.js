import { json } from "express";
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

export const getGig = async (req, res, next) => {
  try {
    const singleGig = await gigModel.findById(req.params.id);
    if (!singleGig) {
      return next(createError(404, "No Gig Found"));
    }

    return res.status(201).send(singleGig);
  } catch (err) {
    console.log(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      //search price between min mx
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const getAllGigs = await gigModel.find(filters).sort({ [q.sort]: -1 });
    return res.status(200).send(getAllGigs);
  } catch (err) {
    console.log(err);
  }
};

export const mygigs = async (req, res, next) => {
  try {
    const findGig = await gigModel.find({ userId: req.userId });
    return res.status(200).send(findGig);
  } catch (error) {
    next(error);
  }
};
