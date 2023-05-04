import createError from "../utils/createError.js";
import orderModel from "../models/order.model.js";
import gigModel from "../models/gig.model.js";
import Stripe from 'stripe'


export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE)
  
const gig=await gigModel.findById(req.params.id)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

    const newOrder = new orderModel({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent:paymentIntent.id,
    });
  
  await newOrder.save();
   res.status(200).send({
     clientSecret: paymentIntent.client_secret,
   });
}

// export const createOrder = async (req, res, next) => {
  // try {
    // const gig = await gigModel.findById(req.params.gigId);
// 
    // const newOrder = new orderModel({
      // gigId: gig._id,
      // img: gig.cover,
      // title: gig.title,
      // buyerId: req.userId,
      // sellerId: gig.userId,
      // price: gig.price,
      // payment_intent: "tempory",
    // });
// 
    // await newOrder.save();
    // res.status(200).send("Successfully");
  // } catch (error) {
    // console.log(error);
  // }
// };

export const getOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({
      // get the order details user and buyers both
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await orderModel.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
   }
  catch (err) {
    next(err)
  }
}
