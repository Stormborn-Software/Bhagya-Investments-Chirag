const Booking = require("../models/booking");
const Puja = require("../models/puja");
const User = require("../models/user");

module.exports.dashboard = async (req, res) => {
  const bookingsCount = await Booking.countDocuments();
  const pujasCount = await Puja.countDocuments();
  const usersCount = await User.countDocuments();
  const recentBookings = await Booking.find()
    .populate("user")
    .populate("puja")
    .sort("-createdAt")
    .limit(5);

  res.render("admin/dashboard", {
    bookingsCount,
    pujasCount,
    usersCount,
    recentBookings,
  });
};

module.exports.allBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("user")
    .populate("puja")
    .sort("-createdAt");
  res.render("admin/bookings", { bookings });
};

module.exports.allPujas = async (req, res) => {
  const pujas = await Puja.find().sort("title");
  res.render("admin/pujas", { pujas });
};
