const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/stars/");
  },
  filename: function (req, file, cb) {
    let imgName = req.body.name + ".jpg";
    cb(null, imgName);
  },
});

var upload = multer({ storage: storage });

exports.upload = upload;
