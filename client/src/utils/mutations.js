import { gql } from "@apollo/client";

export const ADD_USEREVENT = gql`
  mutation AddUserEvent($user: String!, $eventData: EventInput!) {
    addUserEvent(user: $user, eventData: $eventData) {
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
            _id
            username
            email
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            username
            email
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

