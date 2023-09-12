import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { SAVE_USEREVENT } from "../utils/mutations";

import Auth from "../utils/auth";

const SearchEvents = () => {
  // state for holding searched event results
  const [searchedEvents, setSearchedEvents] = useState([]);
  // state for holding search input
  const [searchInput, setSearchInput] = useState("");

  // const [addUserEvent, { error }] = useMutation(SAVE_EVENT);

  // handle search input and send request to back-end for fetching data from API with API key (hidden from client)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(`/search/${searchInput}`);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { events } = await response.json();

      const eventData = events.map((event) => ({
        eventId: event.id,
        performer: event.performers[0].name || ["No performers at this event."],
        venue: event.venue.name,
        location: event.venue.extended_address,
        date: event.datetime_local,
        title: event.title || "",
        image: event.performers[0].image,
        link: event.url,
      }));

      console.log(eventData);
      setSearchedEvents(eventData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h1>Search for Events!</h1>
        <form onSubmit={handleFormSubmit} className="event-search">
          <input
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Search for events!"
          />
          <button type="submit" variant="success">
            Submit Search
          </button>
        </form>
      </div>

      <h2 className="pt-5">
        {searchedEvents.length
          ? `Viewing ${searchedEvents.length} Events:`
          : "No events found!"}
      </h2>
      {searchedEvents.map((event) => {
        return (
          <div key={event.eventId}>
            {event.image ? (
              <img src={event.image} alt={`${event.title} event`} />
            ) : null}
            <div className="event-details">
              <h1 className="event-title">{event.title}</h1>
              <p className="event-performer">{event.performer}</p>
              <p className="event-location">
                {event.venue} in {event.location}
              </p>
              <p className="event-time">{event.date}</p>
              {/* {Auth.loggedIn() && ( */}
              {/* <button
                {handle saving the event data here}
              {/* )}  */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchEvents;
