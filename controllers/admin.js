const model = require("../models/admin");
const passport = require("passport");
const passportConfig = require("../middleware/passport_init");
const { signupValidate } = require("../middleware/inputValidator");
passportConfig.initializeConfig(passport);

exports.home = function (req, res, next) {
  console.log("req.user is ", req.user);
  res.render("index", { user: req.user });
};

exports.flights = async function (req, res, next) {
  console.log("flights is called");
  const flights = await model.getFlights();
  res.render("flights", { flights, user: req.user });
};

exports.show_edit_flight = async function (req, res, next) {
  console.log("show edit flight is called");
  const flight = await model.getFlight(req.params.id);
  res.render("editflight", { flight: flight[0], user: req.user });
};

exports.edit_flight = async function (req, res, next) {
  console.log("edit flight is called");
  const flight = await model.editFlight(req.body, req.params.id);
  res.redirect("/flights");
};

exports.show_add_flight = function (req, res, next) {
  console.log("show add flight is called");
  res.render("editflight", {
    flight: {
      name: "",
      price: "",
      spaceship: false,
      broomstick: false,
      description: "",
      img: "",
    },
    user: req.user,
  });
};

exports.add_flight = async function (req, res, next) {
  console.log("add flight is called");
  const flight = await model.addFlight(req.body);
  res.redirect("/flights");
};

exports.delete_flight = async function (req, res, next) {
  console.log("delete flight is called");
  const result = await model.deleteFlight(req.params.id);
  // if(result="Success")
  res.redirect("/flights");
};

exports.show_bookings = async function (req, res, next) {
  console.log("show bookings is called");
  const bookings = await model.getBookings();
  // console.log(bookings);
  res.render("bookings", { bookings, user: req.user });
};

exports.delete_booking = async (req, res, next) => {
  console.log("delete booking is called");
  const bookings = await model.deleteBooking(req.params.id);
  res.redirect("/bookings");
};

exports.show_login = async (req, res, next) => {
  console.log("show_login is called");
  res.render("login");
};

exports.login = async (req, res, next) => {
  console.log("login is called");
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};

exports.show_signup = async (req, res, next) => {
  console.log("show signup is called");
  res.render("signup");
};

exports.signup = async (req, res, next) => {
  console.log("signup is called");
  signupValidate(req.body)
    .then(async (response) => {
      console.log("resolve is called", response);
      let result = await model.signup(req.body);
      res.render("login", {
        messages: { error: "Sign up successful, please login to continue" },
      });
    })
    .catch((error) => {
      console.log("reject handler", error);
      res.render("signup", {
        messages: { error },
      });
    });
};

exports.logout = async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};
