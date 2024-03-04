const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");

router.route("/").get(wrapAsync(homeController.index));

module.exports = router;