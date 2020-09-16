var express = require("express");
var router = express.Router();
const admin = require("../controllers/admin");
const multer = require("../middleware/multer");
const { isLoggedIn } = require("../middleware/hasAuth");
const user = require("../controllers/user");

/* GET home page. */
router.get("/", admin.home);
router.get("/flights", admin.flights);
router.get("/flight/:id/edit", isLoggedIn, admin.show_edit_flight);
router.post(
  "/flight/:id/edit",
  isLoggedIn,
  multer.upload.single("starImage"),
  admin.edit_flight
);
router.get("/flight/add", isLoggedIn, admin.show_add_flight);
router.post(
  "/flight/add",
  isLoggedIn,
  multer.upload.single("starImage"),
  admin.add_flight
);
router.post("/flight/:id/delete", isLoggedIn, admin.delete_flight);
router.get("/bookings", admin.show_bookings);
router.post("/booking/:id/delete", isLoggedIn, admin.delete_booking);

//account
router.get("/login", admin.show_login);
router.post("/login", admin.login);
router.get("/signup", admin.show_signup);
router.post("/signup", admin.signup);
router.get("/logout", admin.logout);

router.get("/api/flights", user.show_flights);

router.post("/api/booking", user.book);

module.exports = router;
