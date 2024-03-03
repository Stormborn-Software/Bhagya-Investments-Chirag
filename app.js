const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, I am Root");
  });
  
app.listen(8080, () => {
    console.log("Listening to Port: http://127.0.0.1:8080/");
  });