import { StyledEventList } from "./styles/eventList.styled";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USEREVENT } from "../utils/mutations";
import { saveEventIds, getSavedEventIds } from "../utils/localStorage";
import React, { useState, useEffect } from "react";

const EventList = ({ events }) => {
  const [addUserEvent, { error }] = useMutation(ADD_USEREVENT);
  const [savedEventIds, setSavedEventIds] = useState(getSavedEventIds());

  // for initial first save
  useEffect(() => {
    return () => saveEventIds(savedEventIds);
  }, []);

  // for any saves after first save
  useEffect(() => {
    saveEventIds(savedEventIds);
  }, [savedEventIds]);

  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  const handleAddEvent = async (eventId) => {
    const eventToSave = events.find((event) => event.eventId === eventId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await addUserEvent({
        variables: {
          eventData: { ...eventToSave },
        },
      });
      console.log(data);
      // still working on getting this to fully function
      setSavedEventIds([...savedEventIds, eventToSave.eventId]);
      saveEventIds(savedEventIds);
      console.log(savedEventIds);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledEventList>
      {events.map((event) => {
        return (
          <div className="Card" key={String(event.eventId)}>
            <img src={event.image} alt={event.title} />
            <div className="Card-body">
              <h2>{event.title}</h2>
              <p>{event.performer}</p>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div className="add-container">
                {Auth.loggedIn() && (
                  <button
                    className="add-btn"
                    disabled={savedEventIds?.some(
                      (savedId) => savedId === event.eventId
                    )}
                    onClick={() => handleAddEvent(event.eventId)}
                  >
                    {savedEventIds?.some(
                      (savedEventId) => savedEventId === event.eventId
                    )
                      ? "Event Already Saved!"
                      : "Save This Event!"}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default EventList;
