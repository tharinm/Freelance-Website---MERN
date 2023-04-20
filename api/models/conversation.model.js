import mongoose from "mongoose";

const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    sellerId: {
      type: String,
      require: true,
    },
    buyerid: {
      type: String,
      require: true,
    },
    readBySeller: {
      type: Boolean,
      require: true,
    },
    readByBuyer: {
      type: Boolean,
      require: true,
    },
    lastMessage: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("conversation", ConversationSchema);
