const db = require("../config/connection");
const { User, Event, UserEvent, Post } = require("../models");

const userData = require("./userSeeds.json");
const eventData = require("./eventSeeds.json");
const userEventData = require("./userEventSeeds.json");
const postData = require("./postSeeds.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Event.deleteMany({});
  await UserEvent.deleteMany({});
  await Post.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const events = await Event.insertMany(eventData);
  const user_events = await UserEvent.insertMany(userEventData);
  const posts = await Post.insertMany(postData);

  console.log("all done!");
  process.exit(0);
});
