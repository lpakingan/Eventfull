import { StyledSocial } from "./styles/social.styled";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_USER_EVENTS, QUERY_USER_EVENTS } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import SocialEventList from "./SocialEventList";
import React, { useState, useEffect } from "react";
import Icon from "../components/icons";
import { StyledExploreSearchBar } from "../components/styles/exploreSearchBar.styled";

export default function Social() {
  const { loading, data } = useQuery(QUERY_ALL_USER_EVENTS);
  const [getSearchedEvents, { searched_loading, searched_data }] =
    useLazyQuery(QUERY_USER_EVENTS);

  const all_user_events = data?.all_user_events || [];

  const [searchedEvents, setSearchedEvents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    if (!loading) {
      setSearchedEvents(data?.all_user_events);
    }
  }, [all_user_events]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSearchError("");

    if (!searchInput) {
      return false;
    }

    try {
      const { data } = await getSearchedEvents({
        variables: {
          user: searchInput,
        },
      });
      const searched_events = data?.user_events;

      if (!searched_events) {
        setSearchError("No user found! Search again.");
      } else {
        setSearchedEvents(searched_events);
        setSearchInput("");
        console.log(searched_events);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!all_user_events.length) {
    return <h3>No Events to Show!</h3>;
  }
  return (
    <StyledSocial>
      <h1>Social</h1>
      <StyledExploreSearchBar>
        <h1>See what another user is going to!</h1>
        <form onSubmit={handleFormSubmit} className="event-search">
          <input
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Username"
          />
          <button type="submit" className="search-btn" variant="success">
            <span>
              <Icon icon="mingcute:search-line" />
            </span>
          </button>
        </form>
        <div className="error-message">{searchError}</div>
      </StyledExploreSearchBar>
      {loading || searched_loading ? (
        <div>Loading...</div>
      ) : (
        <SocialEventList
          all_user_events={searchedEvents}
          // searched_events={searchedEvents}
        />
      )}
    </StyledSocial>
  );
}
