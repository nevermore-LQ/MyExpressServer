const model = require("../models/user");

exports.show_flights = async (req, res, next) => {
  let result = await model.show_flights();
  res.status(200).json(result);
};

exports.book = async (req, res, next) => {
  let result = await model.book(req.body);
  res.status(200).json({ status: "OK" });
};
