const express = require("express");
const router = express.Router();
const { isLoggedIn, isAdmin } = require("../middleware/auth");
const eventController = require("../controllers/event");
const wrapAsync = require("../utils/wrapAsync");

router
  .route("/")
  .get(wrapAsync(eventController.index))
  .post(isAdmin, wrapAsync(eventController.createEvent));

router.route("/:id").get(wrapAsync(eventController.showEvent));

router.post(
  "/:id/register",
  isLoggedIn,
  wrapAsync(eventController.registerForEvent)
);

module.exports = router;
