const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  venue: {
    type: String,
    required: [true, "Venue is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
