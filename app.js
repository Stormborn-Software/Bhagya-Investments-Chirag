const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Hi, I am Root");
  });
  
app.listen(8080, () => {
    console.log("Listening to Port: http://127.0.0.1:8080/");
  });

// Index Route
app.get("/puja", (req, res) =>{
  res.render("puja/index.ejs")
});