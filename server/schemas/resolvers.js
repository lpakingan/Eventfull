const { User, Event, UserEvent } = require("../models");
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
        return await UserEvent.find({}).populate("event").populate("user");
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
          .populate("user");
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

    // refactor this later to Input class in typeDef
    // user will click a button to save an event to their own library of events
    // create a new event in the local database using the parameters fetched from the API (to get ObjectId)
    // addUserEvent: async (
    //   parent,
    //   { eventData, user, event, date, status, preference }
    // ) => {
    //   const newEvent = new Event({
    //     ...eventData,
    //   });
    //   const saved_event = await newEvent.save();

    //   const newUserEvent = await UserEvent.create({
    //     user,
    //     event,
    //     date,
    //     status,
    //     preference,
    //   });
    //   try {
    //     const user_event = await newUserEvent.save();
    //     return user_event;
    //   } catch (err) {
    //     throw new (err, "error in addUserEvent mutation")();
    //   }
    // },
  },
};
module.exports = resolvers;
