// home.js
import React from 'react';
import { StyledHome, StyledIcon } from './styles/home.styled';
import favicon from "../assets/eventfull_favicon.png";
import Icon from './icons';

export default function SocialHome() {
  return (
    <StyledHome>
      <h1>Experience Live Events</h1>
      <h2>Your Way. Your People.</h2>
      <div className="h3-container">
        <div className="h3-item">
          <StyledIcon><Icon icon="eos-icons:compass" /></StyledIcon>
          <h3>Explore countless live events</h3>
        </div>
        <div className="h3-item">
          <img src={favicon} alt='logo'></img>
        </div>
        <div className="h3-item">
          <StyledIcon><Icon icon="lucide:party-popper" /></StyledIcon>
          <h3>Connect with others who share the same passion</h3>
        </div>
      </div>
      <h3>Experience your next event like never before</h3>
    </StyledHome>
  );
}
