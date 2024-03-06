const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");
const homeRouter = require("./routes/home.js");
const panchangRouter = require("./routes/panchang.js");
const pujaRouter = require("./routes/puja.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/devpr1";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//app.use(express.urlencoded({ extended: true}));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("Hi, I am Root");
});

app.use("/home", homeRouter);
app.use("/panchang", panchangRouter);
app.use("/puja", pujaRouter);

app.listen(8080, () => {
  console.log("Listening to Port: http://127.0.0.1:8080/home");
});
