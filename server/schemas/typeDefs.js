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

  input EventInput {
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
    me: User
    users: [User]
    events: [Event]
    all_user_events: [UserEvent]
    user(username: String!): User
    event(title: String!): Event
    user_events(user: String!): [UserEvent]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User

    login(email: String!, password: String!): User

    createEvent(eventData: EventInput!): Event

    addUserEvent(
      eventData: EventInput!
      status: String!
      preference: String!
    ): UserEvent
  }
`;

module.exports = typeDefs;
