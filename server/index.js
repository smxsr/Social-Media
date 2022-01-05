const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const connectDB = require("./db/db");
const postRoute = require("./routes/posts");

const app = new express();
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, console.log(`Server is running on port: 5000 `));
  } catch (err) {
    console.log(err);
  }
};
start();
