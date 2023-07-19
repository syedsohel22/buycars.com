const express = require("express");
const OEMSpecModel = require("../model/oem.model");
const oemRouter = express.Router();

// post
oemRouter.post("/post", async (req, res) => {
  try {
    const {
      model,
      year,
      listPrice,
      availableColors,
      mileage,
      power,
      maxSpeed,
    } = req.body;
    const oemSpec = new OEMSpecModel({
      model,
      year,
      listPrice,
      availableColors,
      mileage,
      power,
      maxSpeed,
    });
    await oemSpec.save();
    res.status(201).json({ message: "OEM Spec added successfully", oemSpec });
  } catch (error) {
    console.error("Error adding OEM Spec:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// get
oemRouter.get("/get", async (req, res) => {
  try {
    const oemSpecs = await OEMSpecModel.find();
    res.json(oemSpecs);
  } catch (error) {
    console.error("Error retrieving OEM Specs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// search
oemRouter.get("/search", async (req, res) => {
  try {
    const { model, year } = req.query;
    const regexModel = new RegExp(model, "i");
    const regexYear = new RegExp(year);

    const oemSpec = await OEMSpecModel.find({
      $or: [{ model: { $regex: regexModel } }, { year: { $regex: regexYear } }],
    });
    res.json(oemSpec);
  } catch (error) {
    console.error("Error searching OEM specs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = oemRouter;
