import email_icon from "../assets/signupLogin/email_icon.png";
import password_icon from "../assets/signupLogin/password_icon.png";
import username_icon from "../assets/signupLogin/username_icon.png";
import { StyledSignup } from "../components/styles/signup.styled";

//TODO need to add value attribute to input tags and on change event to update state
//TODO add link attribute to login

import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  // set initial form state
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...signupFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setSignupFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <StyledSignup>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <div className="header">
            <div className="text">Signup</div>
            <div className="underline"></div>
          </div>
          <div className="input-container">
            <div className="input">
              <img src={email_icon} alt="email icon" />
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={handleInputChange}
                value={signupFormData.email}
                required
              />
            </div>
            <div className="input">
              <img src={username_icon} alt="username icon" />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={signupFormData.username}
                required
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="email icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={signupFormData.password}
                required
              />
            </div>
          </div>
          <div className="login-here">
            Have an account already? <span>Login Here!</span>
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </StyledSignup>
  );
};

export default Signup;
