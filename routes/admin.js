const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middleware/auth");
const adminController = require("../controllers/admin");
const wrapAsync = require("../utils/wrapAsync");

router.use(isAdmin);

router.route("/").get(wrapAsync(adminController.dashboard));

router.route("/bookings").get(wrapAsync(adminController.allBookings));

router
  .route("/pujas")
  .get(wrapAsync(adminController.allPujas))
  .post(wrapAsync(adminController.createPuja));

router
  .route("/pujas/:id")
  .put(wrapAsync(adminController.updatePuja))
  .delete(wrapAsync(adminController.deletePuja));

module.exports = router;
