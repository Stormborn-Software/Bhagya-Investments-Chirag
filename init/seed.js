const mongoose = require("mongoose");
const initData = require("./data.js");
const Puja = require("../models/puja.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/devpr1";

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await Puja.deleteMany({});
    await Puja.insertMany(initData.data);
    console.log("Data Initialized");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

seedDB();
