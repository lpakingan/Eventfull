const db = require("../config/connection");
const { User, Event, UserEvent } = require("../models");

const userData = require("./userSeeds.json");
const eventData = require("./eventSeeds.json");
const userEventData = require("./userEventSeeds.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Event.deleteMany({});
  await UserEvent.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const events = await Event.insertMany(eventData);
  const user_events = await UserEvent.insertMany(userEventData);

  console.log("all done!");
  process.exit(0);
});
