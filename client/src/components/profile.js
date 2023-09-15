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
  const userEvents = userData?.events;
  const hasUserData = userData && userEvents;
  console.log(hasUserData);
  console.log(userEvents);
  return (
    <StyledProfile>
      <StyledProfileInfo>
        {hasUserData && (
          <>
            <h3>{userData.username}</h3>
            <h3>I'm going to {userEvents.length} event(s)!</h3>
            <Icon icon="akar-icons:person" />
          </>
        )}
      </StyledProfileInfo>
      {hasUserData && (
        <StyledProfileEventContainer>
          <ProfileEventList events={userEvents} />
        </StyledProfileEventContainer>
      )}
    </StyledProfile>
  );
}
