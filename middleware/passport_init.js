const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const model = require("../models/admin");

exports.initializeConfig = function (passport) {
  const authenticateUser = async (username, password, done) => {
    console.log("authenticateUser is called");
    try {
      const user = await model.getUserByUsername(username);
      if (user === null) {
        console.log("no such user found");
        return done(null, false, { message: "invalid username or password" });
      } else if (await bcrypt.compare(password, user.password)) {
        console.log("correct");
        return done(null, user);
      } else {
        console.log("incorrect password");
        return done(null, false, { message: "invalid username or password" });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy(authenticateUser));
  passport.serializeUser((user, done) => done(null, user.username));
  passport.deserializeUser((username, done) => {
    model.getUserByUsername(username).then((user) => done(null, user));
  });
};
