const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const homeController = require("../controllers/main.js");
const Puja = reuqire("..models/puja.js");

router.route("/").get(wrapAsync(homeController.puja));
router.route("/1").get(wrapAsync(homeController.show));

module.exports = router;