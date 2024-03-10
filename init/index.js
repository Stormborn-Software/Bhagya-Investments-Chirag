const mongoose = require("mongoose");
const initData = require("./data.js");
const Puja = require("../models/puja.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/devpr1";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Puja.deleteMany({});
  await Puja.insertMany(initData.data);
  console.log("Data Initialized");
};

initDB();