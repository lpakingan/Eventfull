import { StyledEventList } from "./styles/eventList.styled";

const EventList = ({ events }) => {

    if (!events.length) {
        return <h3>No Events Yet</h3>;
    }
    
    return (
        <StyledEventList>
            <h1>Your Upcoming Events...</h1>
        {events.map((event) => {
            return (
                <div className="Card" key={event._id}>
                    <img src={event.image} alt={event.title} />
                    <div className="Card-body">
                        <h2>{event.title}</h2>
                        <p>{event.performer}</p>
                        <p>{event.date}</p>
                    </div>
                </div>
            )
    })}
        </StyledEventList>
    )
}



export default EventList;