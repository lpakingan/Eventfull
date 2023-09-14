import { StyledEventList } from "./styles/eventList.styled";
import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_EVENT, REMOVE_USER_EVENT } from "../utils/mutations";
// import { removeEventId } from "../utils/localStorage";

const ProfileEventList = ({ events }) => {
  const [updateUserEvent] = useMutation(UPDATE_USER_EVENT);
  const [removeUserEvent] = useMutation(REMOVE_USER_EVENT);
  const [isUpdateOpen, setisUpdateOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    preference: "Interested",
    status: "No preference",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const openUpdateModal = (eventId) => {
    setSelectedId(eventId);
    setisUpdateOpen(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await updateUserEvent({
        variables: {
          userEvent: selectedId,
          newStatus: updatedData.status,
          newPreference: updatedData.preference,
        },
      });

      console.log(data);
      setisUpdateOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveEvent = async (eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeUserEvent({
        variables: { userEvent: eventId },
      });
      console.log(data);
      // fix this later
      // removeEventId(eventId);
    } catch (err) {
      console.error(err);
    }
  };

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
              <h1>{event.event.title}</h1>
              <p>{event.event.venue}</p>
              <p>{event.event.date}</p>
              <p>{event.event.location}</p>
              <h2>How do I prefer to go?</h2>
              <h3>{event.preference}</h3>
              <h2>I am</h2>
              <h3>{event.status}</h3>
              <div className="add-container">
                <button
                  className="add-btn"
                  onClick={() => openUpdateModal(event._id)}
                >
                  Edit event
                </button>
                {isUpdateOpen && selectedId === event._id && (
                  <div className="modal">
                    <div className="modal-content">
                      <form>
                        <h1>Edit your preferences</h1>
                        <h2>
                          Preference: How would you prefer to go to this event?
                          Let others know to get the optimal experience!
                        </h2>
                        <select
                          name="preference"
                          value={updatedData.preference}
                          onChange={handleInputChange}
                        >
                          <option value="No Preference">No preference</option>
                          <option value="Want a Group">Want a Group</option>
                          <option value="Want to go Solo">
                            Want to Go Solo
                          </option>
                        </select>
                        <h2>
                          Status: Are you going? On the fence? Not planning on
                          attending? Let others know so they can discuss your
                          plans (and maybe convince you to go)!
                        </h2>
                        <select
                          name="status"
                          value={updatedData.status}
                          onChange={handleInputChange}
                        >
                          <option value="Interested">Interested</option>
                          <option value="Going">Going</option>
                          <option value="Not Going">Not Going</option>
                        </select>
                        <button
                          className="add-btn"
                          type="button"
                          onClick={handleFormSubmit}
                        >
                          Update Event Preferences
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                <button
                  className="add-btn"
                  onClick={() => handleRemoveEvent(event._id)}
                >
                  Remove event
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </StyledEventList>
  );
};

export default ProfileEventList;
