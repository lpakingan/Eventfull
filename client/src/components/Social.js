import { StyledSocial } from "./styles/social.styled";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_USER_EVENTS } from "../utils/queries";
import SocialEventList from "./SocialEventList";
import React from "react";

export default function Social() {
  const { loading, data } = useQuery(QUERY_ALL_USER_EVENTS);

  const all_user_events = data?.all_user_events || [];

  if (!all_user_events.length) {
    return <h3>No Events to Show!</h3>;
  }
  return (
    <StyledSocial>
      <h1>Social</h1>
      <h2>See what other users are going to!</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <SocialEventList all_user_events={all_user_events} />
      )}
    </StyledSocial>
  );
}
