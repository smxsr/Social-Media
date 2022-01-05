const mongoose = require("mongoose");
require("dotenv").config();
const connenctDB = (url) => {
  mongoose
    .connect(
      url,
      { useNewUrlParser: true },
      { useCreateIndex: true },
      { useFindAndModify: false },
      { useUnifiedTopology: true }
    )

    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};
module.exports = connenctDB;
