const Event = require("../models/event");
const Puja = require("../models/puja");

module.exports.index = async (req, res) => {
  const events = await Event.find({
    endDate: { $gte: new Date() },
  }).populate("pujaType");
  res.render("events/index", { events });
};

module.exports.createEvent = async (req, res) => {
  const event = new Event(req.body.event);
  await event.save();
  req.flash("success", "Successfully created new event!");
  res.redirect(`/events/${event._id}`);
};

module.exports.showEvent = async (req, res) => {
  const event = await Event.findById(req.params.id)
    .populate("pujaType")
    .populate("participants");
  res.render("events/show", { event });
};

module.exports.registerForEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  event.participants.push(req.user._id);
  await event.save();
  req.flash("success", "Successfully registered for event!");
  res.redirect(`/events/${event._id}`);
};
