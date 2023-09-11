const mongoose = require("mongoose");

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
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
