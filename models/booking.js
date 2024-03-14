const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    puja: {
      type: Schema.Types.ObjectId,
      ref: "Puja",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
    payment: {
      orderId: String,
      paymentId: String,
      status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
      },
    },
    location: {
      address: String,
      city: String,
      state: String,
      pincode: String,
    },
    specialRequirements: String,
    participants: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
