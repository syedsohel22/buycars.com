const mongoose = require("mongoose");

const OEMSpecSchema = new mongoose.Schema(
  {
    model: { type: String, required: true },
    year: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    availableColors: [String],
    mileage: Number,
    power: Number,
    maxSpeed: Number,
  },
  {
    versionKey: false,
  }
);
const OEMSpecModel = mongoose.model("OEMSpec", OEMSpecSchema);
module.exports = OEMSpecModel;
