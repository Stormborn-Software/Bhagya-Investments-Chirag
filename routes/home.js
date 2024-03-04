const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const homeController = require("../controllers/home.js");

router.route("/").get(wrapAsync(homeController.index));

module.exports = router;