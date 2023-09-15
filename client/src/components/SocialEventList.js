import { StyledEventList } from "./styles/eventList.styled";
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
    <StyledEventList>
      {all_user_events.map((user_event) => {
        const eventId = String(user_event._id);
        const openedFeed = openFeed[eventId];

        return (
          <div className="Card" key={String(user_event._id)}>
            <img src={user_event.event.image} alt={user_event.event.title} />
            <div className="Card-body">
              <h1>{user_event.user.username}</h1>
              <h3>{user_event.event.title}</h3>
              <p>{user_event.event.venue}</p>
              <p>{user_event.event.date}</p>
              <p>Preference: {user_event.preference}</p>
              <p>Status: {user_event.status}</p>
              <p>View Posts ({user_event.feed.length})</p>
              <div className="add-container">
                {Auth.loggedIn() && (
                  <button
                    className="add-btn"
                    onClick={() => toggleFeed(eventId)}
                  >
                    {openedFeed ? "Hide Posts" : "View Posts"}
                  </button>
                )}

                {openedFeed && user_event.feed.length > 0 && (
                  <div>
                    <Feed posts={user_event.feed} />
                  </div>
                )}
                {openedFeed && user_event.feed.length === 0 && (
                  <div className="Card">
                    <p>No Posts available. Add one!</p>
                    <Feed posts={user_event.feed} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default SocialEventList;
