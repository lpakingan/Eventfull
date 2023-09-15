import { StyledEventList } from "./styles/eventList.styled";
import Auth from "../utils/auth";

const SocialEventList = ({ all_user_events }) => {
  console.log(all_user_events);
  return (
    <StyledEventList>
      {all_user_events.map((user_event) => {
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
              <div className="add-container">
                {Auth.loggedIn() && (
                  <button
                    className="add-btn"
                    // onClick={() => handleAddComment()}
                  >
                    Comment
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

export default SocialEventList;
