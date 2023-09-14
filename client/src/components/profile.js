import {
  StyledProfile,
  StyledProfileInfo,
  StyledProfileEventContainer,
} from "./styles/profile.styled";
import { Icon } from "@iconify/react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import ProfileEventList from "./ProfileEventList";

export default function Profile() {
  const { data, loading } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.me || [];
  const userEvents = userData.events;
  console.log(userEvents);

  return (
    <StyledProfile>
      <StyledProfileInfo>
        <Icon icon="akar-icons:person" />
        <h3>{userData.username}</h3>
        <h3>I'm going to {userEvents.length} event(s)!</h3>
      </StyledProfileInfo>
      <StyledProfileEventContainer>
        <ProfileEventList events={userEvents} />
      </StyledProfileEventContainer>
    </StyledProfile>
  );
}
