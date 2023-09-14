import { gql } from "@apollo/client";

export const ADD_USEREVENT = gql`
  mutation AddUserEvent($eventData: EventInput!) {
    addUserEvent(eventData: $eventData) {
      _id
      user {
        _id
      }
      event {
        _id
      }
      date
      status
      preference
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation createEvent($eventInput: EventInput!) {
    createEvent(eventInput: $eventInput) {
      _id
      title
      date
      venue
      location
      performer
      image
      link
      eventId
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postInput: PostInput!) {
    addPost(postData: $postInput) {
      _id
      user_event {
        _id
      }
      user {
        _id
      }
      content
    }
  }
`;

export const REMOVE_USER_EVENT = gql`
  mutation removeUserEvent($user: String!, $event: String!) {
    removeUserEvent(user: $user, event: $event) {
      _id
      username
      user_events {
        _id
      }
    }
  }
`;

export const UPDATE_USER_EVENT = gql`
  mutation UpdateUserEvent(
    $userEvent: String!
    $newStatus: String!
    $newPreference: String!
  ) {
    updateUserEvent(
      user_event: $userEvent
      new_status: $newStatus
      new_preference: $newPreference
    ) {
      _id
      status
      preference
    }
  }
`;
