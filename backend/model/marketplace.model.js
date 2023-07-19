const mongoose = require("mongoose");

const MarketplaceInventorySchema = new mongoose.Schema(
  {
    oemSpec: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OEMSpec",
      required: true,
    },
    kmOdometer: Number,
    majorScratches: Boolean,
    originalPaint: Boolean,
    accidentsReported: Number,
    previousBuyers: Number,
    registrationPlace: String,
    isSold: Boolean,
  },
  { versionKey: false }
);

const MarketplaceInventoryModel = mongoose.model(
  "MarketplaceInventory",
  MarketplaceInventorySchema
);

module.exports = MarketplaceInventoryModel;
