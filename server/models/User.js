const mongoose = require("mongoose");

const Event = require("./Event");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  events: [Event.schema],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
