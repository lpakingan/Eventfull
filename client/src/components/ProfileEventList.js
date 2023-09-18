import { StyledProfileEventList } from "./styles/ProfileEventList.styled";
import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_EVENT, REMOVE_USER_EVENT } from "../utils/mutations";
import { Link } from "react-router-dom";
const dateFormat = require("../utils/dateFormat");

const ProfileEventList = ({ events }) => {
  const [updateUserEvent] = useMutation(UPDATE_USER_EVENT);
  const [removeUserEvent] = useMutation(REMOVE_USER_EVENT);
  const [isUpdateOpen, setisUpdateOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    preference: "No preference",
    status: "Interested",
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

  const handleRemoveEvent = async (user_event, eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeUserEvent({
        variables: { userEvent: user_event },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!events.length) {
    return (
      <StyledProfileEventList>
        <h1>My Events</h1>
        <h3>
          You don't have any events yet, find your next one
          <Link to="/explore"> here!</Link>
        </h3>
      </StyledProfileEventList>
    );
  }

  return (
    <StyledProfileEventList>
      <h1>My Events</h1>
      {events.map((event) => {
        return (
          <div className="Card" key={String(event._id)}>
            <div className="Card-header">
              <img src={event.event.image} alt={event.event.title} />
              <h1>{event.event.title}</h1>
            </div>
            <div className="Card-body">
              <h2>{event.event.venue}</h2>
              <h2>{dateFormat(event.event.date)}</h2>
              <h2>{event.event.location}</h2>
              <h2>
                <span>Status:</span> {event.status}
              </h2>

              <h2>
                <span>Preference:</span> {event.preference}
              </h2>
            </div>
            <div className="btn-container">
              {(!isUpdateOpen || selectedId !== event._id) && (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => openUpdateModal(event._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() =>
                      handleRemoveEvent(event._id, event.event.eventId)
                    }
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
            {isUpdateOpen && selectedId === event._id && (
              <div className="modal">
                <div className="modal-content">
                  <form>
                    <h1>Edit your preferences</h1>
                    <h2>
                      <span>Preference:</span> How would you prefer to go to
                      this event? Let others know to get the optimal experience!
                    </h2>
                    <select
                      name="preference"
                      value={updatedData.preference}
                      onChange={handleInputChange}
                    >
                      <option value="No Preference">No preference</option>
                      <option value="Want a Group">Want a Group</option>
                      <option value="Want to go Solo">Want to Go Solo</option>
                    </select>
                    <h2>
                      <span>Status:</span> Are you going? On the fence? Not
                      planning on attending? Let others know so they can discuss
                      your plans (and maybe convince you to go)!
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
                      className="update-btn"
                      type="button"
                      onClick={handleFormSubmit}
                    >
                      Update Event Preferences
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </StyledProfileEventList>
  );
};

export default ProfileEventList;
