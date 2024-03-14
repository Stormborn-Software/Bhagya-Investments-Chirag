const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pujaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    descriptionMain: String,
    price: {
      type: Number,
      required: true,
    },
    duration: String,
    requirements: [String],
    image: {
      url: String,
      filename: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    category: {
      type: String,
      enum: ["regular", "special", "festival"],
    },
  },
  {
    timestamps: true,
  }
);

const Puja = mongoose.model("Puja", pujaSchema);
module.exports = Puja;
