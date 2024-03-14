const User = require("../models/user");
const passport = require("passport");

module.exports.registerForm = (req, res) => {
  res.render("auth/register");
};

module.exports.register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/home");
    });
  } catch (e) {
    res.redirect("/register");
  }
};

module.exports.loginForm = (req, res) => {
  res.render("auth/login");
};

module.exports.login = passport.authenticate("local", {
  failureRedirect: "/login",
  successRedirect: "/home",
});

module.exports.logout = (req, res) => {
  req.logout();
  res.redirect("/home");
};
