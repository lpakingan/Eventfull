import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      _id
      email
      events {
        event {
          _id
          title
          location
          link
          performer
          image
          eventId
          date
          venue
        }
        status
        preference
        _id
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query events {
    events {
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

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      events {
        event {
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
    }
  }
`;

export const QUERY_ALL_USER_EVENTS = gql`
  query all_user_events {
    all_user_events {
      _id
      user {
        username
      }
      event {
        title
      }
      feed {
        _id
        content
        user {
          username
        }
      }
      status
      preference
      date
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      events {
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
  }
`;

export const QUERY_EVENT = gql`
  query event($title: String!) {
    event(title: $title) {
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

export const QUERY_USER_EVENTS = gql`
  query QUERY_USER_EVENTS($user: String!) {
    user_events(user: $user) {
      _id
      user {
        username
      }
      event {
        title
      }
      feed {
        _id
        content
        user {
          username
        }
      }
      status
      preference
      date
    }
  }
`;
