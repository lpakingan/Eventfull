import { StyledSocialEventList } from "./styles/socialEventList.styled";
import Auth from "../utils/auth";
import React, { useState } from "react";
import Feed from "./Feed";

const SocialEventList = ({ all_user_events }) => {
  const [openFeed, setOpenFeed] = useState({});

  const toggleFeed = (eventId) => {
    setOpenFeed((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId] || false,
    }));
  };

  return (
    <StyledSocialEventList>
      {all_user_events.map((user_event) => {
        const eventId = String(user_event._id);
        const openedFeed = openFeed[eventId];

        return (
          <div className="Card" key={String(user_event._id)}>
            <div className="Card-header">
              <h1>{user_event.user.username}</h1>
            </div>
            <div className="Card-body">
              <img src={user_event.event.image} alt={user_event.event.title} />
              <h1>{user_event.event.title}</h1>
              <p>{user_event.event.venue}</p>
              <p>{user_event.event.date}</p>
              <p>
                <span>Preference:</span> {user_event.preference}
              </p>
              <p>
                <span>Status:</span> {user_event.status}
              </p>
              <p>{user_event.feed.length} Posts</p>
            </div>
            <div className="view-container">
              {Auth.loggedIn() && (
                <button
                  className="view-btn"
                  onClick={() => toggleFeed(eventId)}
                >
                  {openedFeed ? "Hide Posts" : "View Posts"}
                </button>
              )}

              {openedFeed && user_event.feed.length > 0 && (
                <div className="post-container">
                  <Feed
                    posts={user_event.feed}
                    user_event_id={user_event._id}
                  />
                </div>
              )}
              {openedFeed && user_event.feed.length === 0 && (
                <div className="post-container">
                  <p>No posts yet. Be the first to post!</p>
                  <Feed
                    posts={user_event.feed}
                    user_event_id={user_event._id}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </StyledSocialEventList>
  );
};

export default SocialEventList;
