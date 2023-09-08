const Event = require("../models/Event");

const resolvers = {
    Query: {
        events: async () => {
            try {
                const events = await Event.find({});
                return events;
            } catch (err) {
                throw new (err, "error in events query");
            }
        },
    },

    Mutation: {
        createEvent: async (parent, { title, date, venue, location }) => {
            const newEvent = await Event.create(
                {
                    title,
                    date,
                    venue,
                    location,
                });
                try {
                    const event = await newEvent.save();
                    return event;
                } catch (err) {
                    throw new (err, "error in createEvent mutation");
                }
        },
    },
};

module.exports = resolvers;