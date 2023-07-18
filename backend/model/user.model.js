const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isDealer: { type: Boolean, require: true },
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
