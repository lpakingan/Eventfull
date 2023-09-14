import { StyledEventList } from "./styles/eventList.styled";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USEREVENT } from "../utils/mutations";

const EventList = ({ events }) => {
  const [addUserEvent, { error }] = useMutation(ADD_USEREVENT);

  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  const handleAddEvent = async (eventId) => {
    const eventToSave = events.find((event) => event.eventId === eventId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(eventToSave);
      const { data } = await addUserEvent({
        variables: {
          eventData: { ...eventToSave },
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

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
                <button
                  className="add-btn"
                  onClick={() => handleAddEvent(event.eventId)}
                >
                  Add event
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default EventList;
