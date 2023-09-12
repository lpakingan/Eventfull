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
