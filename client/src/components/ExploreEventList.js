import { StyledEventList } from "./styles/eventList.styled";

const EventList = ({ events }) => {
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

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
                <button className="add-btn">Add event</button>
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default EventList;
