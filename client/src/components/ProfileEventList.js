import { StyledEventList } from "./styles/eventList.styled";

const ProfileEventList = ({ events }) => {
  if (!events.length) {
    return <h3>I'm not going to any events yet!</h3>;
  }

  return (
    <StyledEventList>
      {events.map((event) => {
        return (
          <div className="Card" key={String(event._id)}>
            <img src={event.event.image} alt={event.event.title} />
            <div className="Card-body">
              <h2>{event.event.title}</h2>
              <p>{event.event.performer}</p>
              <p>{event.event.date}</p>
              <p>{event.event.location}</p>
              <h3>{event.preference}</h3>
              <h3>{event.status}</h3>
              <div className="add-container">
                <button className="add-btn">Edit event</button>
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default ProfileEventList;
