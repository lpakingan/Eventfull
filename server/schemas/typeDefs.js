const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        events: [Event]
    }

    type Event {
        _id: ID
        title: String
        date: String
        venue: String
        location: String
    }

    type UserEvent {
        _id: ID
        username: String
        event: Event
        date: String
        status: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        events: [Event]
        event(title: String!): Event
        userEvents(username: String!): UserEvent
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        createEvent(title: String!, date: String!, venue: String!, location: String!): Event
        addEvent(username: String!, title: String!, date: String!, venue: String!, location: String!): UserEvent
    }
`;

module.exports = typeDefs;