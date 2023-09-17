import React, { useState, useEffect } from "react";

import ExploreEventList from "../components/ExploreEventList";
import { StyledExploreSearchBar } from "../components/styles/exploreSearchBar.styled";
import Icon from "../components/icons";

import Auth from "../utils/auth";

const Explore = () => {
  // state for holding searched event results
  const [searchedEvents, setSearchedEvents] = useState([]);
  // state for holding search input
  const [searchInput, setSearchInput] = useState("");

  // state for checking if user has searched for events
  const [searched, setSearched] = useState(false);

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

      console.log(events);

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
      setSearched(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <StyledExploreSearchBar>
        <h1>Search for Events!</h1>
        <form onSubmit={handleFormSubmit} className="event-search">
          <input
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Example: Beyoncé"
          />
          <button type="submit" className="search-btn" variant="success">
            <span>
              <Icon icon="mingcute:search-line" />
            </span>
          </button>
        </form>

        {searched && !searchedEvents.length && (
          <h2>No events found!</h2>
        )}

        {searched && searchedEvents.length > 0 && (
          <h2>{`Viewing ${searchedEvents.length} Events:`}</h2>

        )}
      
        <ExploreEventList events={searchedEvents} />
      </StyledExploreSearchBar>
    </>
  );
};

export default Explore;
