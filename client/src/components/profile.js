import {
  StyledProfile,
  StyledProfileInfo,
  StyledProfileEventContainer,
} from "./styles/profile.styled";
import profile_picture from "../assets/profile_picture.png";
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
        {hasUserData && (
          <StyledProfileInfo>
            <h1>My Profile</h1>
            <div className="profile-image">
              <img src={profile_picture} alt="picture placeholder"></img>
            </div>
            <div className="profile-body">
              <h1>{userData.username}</h1>
              <p>Going to {userEvents.length} event(s)!</p>
              <p>FirstName LastName</p>
              <p>California, United States</p>
              <p><span>Interests: </span> R&B, Basketball</p>
              <p><span>Favorite Artists: </span>Drake, J. Cole</p>
              <p><span>Favorite Event: </span>Taylor Swift Eras Tour</p>
            </div>
          </StyledProfileInfo>
        )}
      {hasUserData && (
        <StyledProfileEventContainer>
          <ProfileEventList events={userEvents} />
        </StyledProfileEventContainer>
      )}
    </StyledProfile>
  );
}
