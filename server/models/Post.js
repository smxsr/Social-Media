const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    desc: {
      type: String,

      max: 50,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    // coverPicture: {
    //   type: String,
    //   default: "",
    // },
    // followers: {
    //   type: Array,
    //   default: [],
    // },
    // followings: {
    //   type: Array,
    //   default: [],
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // desc: {
    //   type: String,
    //   max: 80,
    // },
    // city: {
    //   type: String,
    //   max: 50,
    // },
    // from: {
    //   type: String,
    //   max: 50,
    // },
    // relationship: {
    //   type: Number,
    //   enum: [1, 2, 3],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
