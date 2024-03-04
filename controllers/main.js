const { response } = require("express");

module.exports.index = async (req, res) => {
    res.render("./main/index.ejs");
};
module.exports.panchang = async (req, res) => {
    res.render("./main/panchang.ejs");
};  
module.exports.puja = async (req, res) => {
    res.render("./main/puja.ejs");
};  
module.exports.show = async (req, res) => {
    res.render("./main/show.ejs");
};  