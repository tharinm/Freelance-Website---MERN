import createError from "../utils/createError.js";
import messageModel from "../models/message.model.js";
import conversation from "../models/conversation.model.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new messageModel({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
  });
  try {
    const saveMessage = await newMessage.save();
    await conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(200).send(saveMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const message = await messageModel.find({ conversationId: req.params.id });
    res.status(200).send(message);
  } catch (error) {
    next(error);
  }
};
