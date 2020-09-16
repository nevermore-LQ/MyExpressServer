const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  console.log("isloggedin called");
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createError(403, "Please login to use this feature"));
  }
};
