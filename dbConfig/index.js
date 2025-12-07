const mongoose = require("mongoose");

const DbConfig = function () {
  return mongoose
    .connect(
      "mongodb+srv://TalhaDevDaily:Bmwm3gtrrx7rx8@cluster1st.obvkoyj.mongodb.net/?appName=Cluster1st"
    )
    .then(function (req, res) {
      console.log("Database is connected! 📔");
    });
};

module.exports = DbConfig;
