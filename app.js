const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");
const homeRouter = require("./routes/home.js");


app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
//app.use(express.urlencodedz({ extended: true}));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hi, I am Root");
  });

app.use("/home", homeRouter);
  
app.listen(8080, () => {
    console.log("Listening to Port: http://127.0.0.1:8080/");
  });

// // Index Route
// app.get("/puja", (req, res) =>{
//   res.render("puja/index.ejs")
// });