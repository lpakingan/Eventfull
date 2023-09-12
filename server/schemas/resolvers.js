const { User, Event, UserEvent, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    events: async () => {
      try {
        const events = await Event.find({});
        return events;
      } catch (err) {
        throw new (err, "error in events query")();
      }
    },

    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (err) {
        throw new (err, "error in users query")();
      }
    },

    all_user_events: async () => {
      try {
        return await UserEvent.find({})
          .populate("event")
          .populate("user")
          .populate({ path: "feed", populate: ["user", "user_event"] });
      } catch (err) {
        throw new (err, "error in all_user_events query")();
      }
    },

    user: async (parent, { username }) => {
      try {
        return await User.findOne({ username: username });
      } catch (err) {
        throw new (err, "error in user query")();
      }
    },

    event: async (parent, { title }) => {
      try {
        return await Event.findOne({ title: title });
      } catch (err) {
        throw new (err, "error in event query")();
      }
    },

    user_events: async (parent, { user }) => {
      try {
        const searched_user = await User.findOne({ username: user });

        if (!searched_user) {
          return null;
        }

        return await UserEvent.find({ user: searched_user._id })
          .populate("event")
          .populate("user")
          .populate({ path: "feed", populate: ["user", "user_event"] });
      } catch (err) {
        throw new (err, "error in user_events query")();
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // uncomment out when login is added
      //   const token = signToken(user);

      //   return { token, user };
      return { user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // create a new event that is not on SeatGeek API
    createEvent: async (parent, { eventData }) => {
      const newEvent = new Event({
        ...eventData,
      });
      try {
        const event = await newEvent.save();
        return event;
      } catch (err) {
        throw new (err, "error in createEvent mutation")();
      }
    },

    // user will click a button to save an event to their own library of events
    // create a new event in the local database using the parameters fetched from the API (to get ObjectId)
    // user: _id of User
    addUserEvent: async (parent, { eventData, user }) => {
      // if (context.user) {
      const newEvent = new Event({
        ...eventData,
      });
      const saved_event = await newEvent.save();

      const newUserEvent = await UserEvent.create({
        user,
        event: saved_event._id,
      });
      const user_event = await newUserEvent.save();

      const updatedUser = await User.findOneAndUpdate(
        { _id: user },
        { $push: { events: user_event } },
        { new: true }
      );
      try {
        const user = await updatedUser.save();
        return user_event;
      } catch (err) {
        throw new (err, "error in addUserEvent mutation")();
      }
      // throw new AuthenticationError("You need to be logged in!");
    },

    // add a post/comment to an event
    addPost: async (parent, { postData }) => {
      // addPost: async (parent, { content }, context) => {
      // if (context.user) {
      const newPost = new Post({
        ...postData,
      });

      const post = await newPost.save();

      const updatedUserEvent = await UserEvent.findOneAndUpdate(
        { _id: postData.user_event },
        { $push: { feed: post } },
        { new: true }
      );
      return updatedUserEvent;
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },

    // remove an event from a user's events array and removes the accompanying event that shows up in the feed
    // user: _id of User, user_event: _id of UserEvent
    removeUserEvent: async (parent, { user, user_event }) => {
      // removeUserEvent: async (parent, { user_event }, context) => {
      // if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        // { _id: context.user._id },
        { _id: user },
        { $pull: { events: user_event } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error(`User does not exist!`);
      }

      const removedUserEvent = await UserEvent.findOneAndDelete({
        _id: user_event,
      });

      return updatedUser;
      // }

      // throw new AuthenticationError("You need to be logged in!");
    },

    // allows user to update an event they have added to their feed (their status and preference)
    // user_event = _id of UserEvent
    updateUserEvent: async (
      parent,
      { user_event, new_status, new_preference }
    ) => {
      // if (context.user) {
      const updatedUserEvent = await UserEvent.findByIdAndUpdate(
        { _id: user_event },
        { status: new_status, preference: new_preference },
        { new: true }
      );

      if (!updatedUserEvent) {
        throw new Error(`UserEvent does not exist!`);
      }

      return updatedUserEvent;
      // }

      // throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
