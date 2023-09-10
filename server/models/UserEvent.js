const mongoose = require("mongoose");

const UserEventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "Event is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  status: {
    type: String,
    enum: ["Going", "Not Going", "Interested"],
    required: [true, "Status is required"],
    default: "Interested",
  },
  preference: {
    type: String,
    enum: ["Want a Group", "Want to go Solo"],
    required: [true, "Preference is required"],
    default: "No preference",
  },
});

const UserEvent = mongoose.model("UserEvent", UserEventSchema);

module.exports = UserEvent;
