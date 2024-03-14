const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    puja: {
      type: Schema.Types.ObjectId,
      ref: "Puja",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
