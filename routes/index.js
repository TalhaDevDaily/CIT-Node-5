const express = require("express");
const {
  registeration,
  login,
} = require("../controllers/authenticationController");
const route = express.Router();

route.get("/", function (req, res) {
  res.send(
    "Oh what a beautiful morning, oh what a beautiful day, I've got a beautiful feeling, everything's going my way 🌅"
  );
});

route.post("/register", registeration);

route.post("/login", login);

module.exports = route;
