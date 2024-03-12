const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const homeController = require("../controllers/main.js");

router.route("/").get(wrapAsync(homeController.puja));
router.route("/:id").get(wrapAsync(homeController.show));

module.exports = router;