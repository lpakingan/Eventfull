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
  mutation AddPost($postData: PostInput!) {
    addPost(postData: $postData) {
      _id
      content
      username
      user {
        _id
      }
      user_event {
        _id
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation RemovePost($userEvent: String!, $post: String!) {
    removePost(user_event: $userEvent, post: $post) {
      feed {
        _id
        user_event {
          _id
        }
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($post: String!, $newContent: String!) {
    updatePost(post: $post, new_content: $newContent) {
      content
      username
      _id
      user_event {
        _id
      }
    }
  }
`;

export const REMOVE_USER_EVENT = gql`
  mutation RemoveUserEvent($userEvent: String!) {
    removeUserEvent(user_event: $userEvent) {
      _id
      events {
        _id
        feed {
          _id
        }
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
