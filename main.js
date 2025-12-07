const express = require("express");
const app = express();
app.use(express.json());

// Database
const DbConfig = require("./dbConfig");
// Routes
const route = require("./routes");

// Database Calling
DbConfig();

// Routing Calling
app.use(route);

app.listen("8000", function () {
  console.log("Server is running 🏃‍♂️");
});
