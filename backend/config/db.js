const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const connection = async () => {
  try {
    await mongoose.connect(process.env.atlasURL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Something went wrong!", err.message);
  }
  console.log(`App is running on port ${PORT}`);
};

module.exports = { PORT, connection };
