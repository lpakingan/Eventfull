const { gql } = require("apollo-server-express");

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
    performer: String
    image: String
    link: String
    eventId: ID
  }

  type UserEvent {
    _id: ID
    user: User
    event: Event
    date: String
    status: String
    preference: String
  }

  type Query {
    users: [User]
    events: [Event]
    user(username: String!): User
    event(title: String!): Event
    userEvents(username: String!): UserEvent
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User

    createEvent(
      title: String!
      date: String!
      venue: String!
      location: String!
      performer: String
      image: String
      link: String
      eventId: ID
    ): Event

    addEvent(
      username: String!
      title: String!
      date: String!
      venue: String!
      location: String!
    ): UserEvent
  }
`;

module.exports = typeDefs;
