import password_icon from "../assets/signupLogin/password_icon.png";
import username_icon from "../assets/signupLogin/username_icon.png";
import { StyledLogin } from "../components/styles/login.styled";

//TODO need to add value attribute to input tags and on change event to update state
//TODO add link attribute to signup

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...loginFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setLoginError("Unable to login! Check your login credentials.");
    }

    // clear form values
    setLoginFormData({
      email: "",
      password: "",
    });
  };
  return (
    <StyledLogin>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
              {loginError && (<div className="error-message">{loginError}</div>)}
          </div>
          <div className="input-container">
            <div className="input">
              <img src={username_icon} alt="username icon" />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={loginFormData.email}
                required
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="password icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={loginFormData.password}
                required
              />
            </div>
          </div>
          <div className="signup-here">
            Don't Have an account?
            <a href="/signup">
              <span style={{padding: "10px 0"}}>Signup Here!</span>
            </a>
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </StyledLogin>
  );
};

export default Login;
