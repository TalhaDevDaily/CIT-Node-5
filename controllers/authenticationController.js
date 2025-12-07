const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const registeration = async function (req, res) {
  const { username, email, password } = req.body;

  const hassPass = await bcrypt.hash(password, 10);

  const user = new UserSchema({
    username,
    email,
    password: hassPass,
  });

  user.save();

  res.send("Registeration Successful 😎");
};

const login = async function (req, res) {
  const { email, password } = req.body;

  const user = await UserSchema.findOne({ email });

  if (!user) return res.send("User does not exist 👤");

  const match = await bcrypt.compare(password, user.password);

  console.log(match);
  if (!match) return res.send("Invalid password 🔑");

  res.send("Login Successful 🌟");
};

module.exports = { registeration, login };
