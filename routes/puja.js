const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware/auth");
const homeController = require("../controllers/main.js");
const bookingController = require("../controllers/booking.js");

router.route("/").get(wrapAsync(homeController.puja));

router.route("/:id").get(wrapAsync(homeController.show));

router
  .route("/:id/book")
  .get(isLoggedIn, wrapAsync(bookingController.bookingForm))
  .post(isLoggedIn, wrapAsync(bookingController.createBooking));

module.exports = router;
