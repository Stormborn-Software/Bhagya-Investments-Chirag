const { response } = require("express");

module.exports.index = async (req, res) => {
    res.render("./main/index.ejs");
};
module.exports.panchang = async (req, res) => {
    res.render("./main/panchang.ejs");
};  