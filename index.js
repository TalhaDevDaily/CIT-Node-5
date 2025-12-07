const express = require("express");
const app = express();
app.use(express.json());

// Database
const DbConfig = require("./dbConfig");
DbConfig();

// Routing
app.get("/", function (req, res) {
  res.send("Hello World 🌏");
});

app.listen("8000", function () {
  console.log("Server is running 🏃‍♂️");
});
