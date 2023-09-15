const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [UserEvent]
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
    feed: [Post]
  }

  type Post {
    _id: ID
    user_event: UserEvent
    user: User
    username: String
    content: String
  }

  input PostInput {
    user_event: String
    user: String
    username: String
    content: String
  }

  type Auth {
    token: ID!
    user: User
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
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    createEvent(eventData: EventInput!): Event

    addUserEvent(eventData: EventInput!): UserEvent

    addPost(postData: PostInput!): Post

    removeUserEvent(user_event: String!): User

    updateUserEvent(
      user_event: String!
      new_status: String!
      new_preference: String!
    ): UserEvent

    removePost(user_event: String!, post: String!): UserEvent

    updatePost(post: String!, new_content: String!): Post
  }
`;

module.exports = typeDefs;
