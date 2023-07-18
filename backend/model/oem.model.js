const mongoose = require("mongoose");

const oemSchema = mongoose.Schema(
  {
    model_name: { type: String, require: true },
    model_year: { type: String, require: true },
    price: { type: String, require: true },
    available_colors: { type: String, require: true },
    mileage: { type: Number, require: true },
    power: { type: Number, require: true },
    max_speed: { type: Number, require: true },
  },
  {
    versionKey: false,
  }
);

const oemModel = mongoose.model("OEM_Specs", oemSchema);

module.exports = oemModel;
