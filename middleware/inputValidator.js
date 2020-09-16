const validator = require("validator");
const { checkduplicate } = require("../models/admin");

const checkinput = (username, password) => {
  if (!validator.isAlphanumeric(username)) {
    return "username can only contain numbers or letters";
  }
  if (!validator.isLength(username, { min: 2, max: 20 })) {
    return "username's length can only be 2-20";
  }
  if (!validator.isAlphanumeric(password)) {
    return "password can only contain numbers or letters";
  }
  if (!validator.isLength(password, { min: 2, max: 20 })) {
    return "password's length can only be 2-20";
  }
  return "";
};

exports.signupValidate = ({ username, password }) => {
  console.log("run into signupValidate");
  return new Promise((resolve, reject) => {
    let error = checkinput(username, password);
    if (error !== "") {
      reject(error);
      return;
    }

    checkduplicate(username).then((result) => {
      console.log("result is ", result);
      if (result === "duplicated") {
        console.log("reject deplicate");
        reject("username already exists");
        return;
      } else {
        resolve("OK");
        return;
      }
    });
  });
};
