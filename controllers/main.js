const { response } = require("express");
const Puja = require("../models/puja.js");

module.exports.index = async (req, res) => {
  res.render("./main/index.ejs");
};
module.exports.panchang = async (req, res) => {
  res.render("./main/panchang.ejs");
};
module.exports.puja = async (req, res) => {
  const allPujas = await Puja.find({});
  res.render("./main/puja.ejs", { allPujas });
};
module.exports.show = async (req, res) => {
  let { id } = req.params;
  const puja = await Puja.findById(id);
  res.render("./main/show.ejs", { puja });
};
