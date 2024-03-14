const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    pujaType: {
      type: Schema.Types.ObjectId,
      ref: "Puja",
    },
    location: {
      address: String,
      city: String,
      state: String,
      pincode: String,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    image: {
      url: String,
      filename: String,
    },
    maxParticipants: {
      type: Number,
      default: null, // null means unlimited
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
    price: {
      type: Number,
      default: 0,
    },
    requirements: [String],
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      enum: ["puja", "festival", "workshop", "other"],
      required: true,
    },
    recurrence: {
      type: String,
      enum: ["none", "daily", "weekly", "monthly", "yearly"],
      default: "none",
    },
    notifications: [
      {
        type: {
          type: String,
          enum: ["reminder", "update", "cancellation"],
        },
        message: String,
        sentAt: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Add index for better query performance
eventSchema.index({ startDate: 1, endDate: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ status: 1 });

// Virtual for checking if event is full
eventSchema.virtual("isFull").get(function () {
  if (!this.maxParticipants) return false;
  return this.participants.length >= this.maxParticipants;
});

// Method to check if user can register
eventSchema.methods.canRegister = function (userId) {
  if (this.status !== "upcoming") return false;
  if (this.isFull) return false;
  return !this.participants.includes(userId);
};

module.exports = mongoose.model("Event", eventSchema);
