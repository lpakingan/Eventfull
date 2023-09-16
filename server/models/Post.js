const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PostSchema = new mongoose.Schema({
  user_event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserEvent",
    required: [true, "UserEvent is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  username: {
    type: String,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
