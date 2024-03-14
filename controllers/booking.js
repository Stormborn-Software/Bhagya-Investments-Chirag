const Booking = require("../models/booking");
const Puja = require("../models/puja");

module.exports.bookingForm = async (req, res) => {
  const { id } = req.params;
  const puja = await Puja.findById(id);
  res.render("booking/new", { puja });
};

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const { date, time, location, participants, specialRequirements } = req.body;

  const puja = await Puja.findById(id);
  const booking = new Booking({
    user: req.user._id,
    puja: id,
    date,
    time,
    location,
    participants,
    specialRequirements,
    price: puja.price,
    status: "confirmed",
  });

  await booking.save();
  puja.bookings.push(booking._id);
  await puja.save();

  req.flash("success", "Booking confirmed successfully!");
  res.redirect(`/puja/${id}`);
};
