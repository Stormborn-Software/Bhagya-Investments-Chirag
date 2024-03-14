const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const authController = require("../controllers/auth");

router
  .route("/register")
  .get(authController.renderRegister)
  .post(wrapAsync(authController.register));

router
  .route("/login")
  .get(authController.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      keepSessionInfo: true,
    }),
    authController.login
  );

router.get("/logout", authController.logout);

module.exports = router;
