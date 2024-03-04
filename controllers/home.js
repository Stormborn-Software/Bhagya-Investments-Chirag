const { response } = require("express");

module.exports.index = async (req, res) => {
    res.render("./main/index.ejs");
};