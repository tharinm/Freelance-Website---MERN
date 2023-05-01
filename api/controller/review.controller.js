import reviewModel from "../models/review.model.js";
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import gigModel from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Seller can't review! "));
  }

  const newReview = new reviewModel({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await reviewModel.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) {
      return next(
        createError(403, "You have already created a review for this gig!")
      );
    }

    //TODO: check if the user purchased the gig.
    const saveReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      //mongodb increment method
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(saveReview);
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await reviewModel.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async (req, res, next) => {
  const findReview = await reviewModel.findById(req.params.id);

  if (!findReview) {
    return next(createError(403, "Review not found"));
  }

  if (findReview.userId === req.userId) {
    try {
      await reviewModel.deleteOne();
      return res.status(200).send("deleted");
    } catch (error) {
      console.log(error);
    }
  } else {
    return next(createError(403, "You are not allowed to delete this review!"));
  }
};
