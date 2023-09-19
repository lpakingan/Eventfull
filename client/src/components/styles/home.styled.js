/* home.styled.js */
import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Add spacing between elements */
  border-radius: 10px;

  /* Add styles for the favicon */
  img {
    max-width: 150px; /* Adjust the size of the favicon */
  }

  /* Add styles for the h3 tags inside the containers */
  .h3-item h3 {
    text-align: center;
    margin: 0; /* Remove default margin */
  }

  /* Create a flex container for the h3 containers */
  .h3-container {
    display: flex;
    align-items: center;
    gap: 20px; /* Add spacing between h3 containers and favicon */
    width: 100%; /* Ensure the containers take up the full width */
  }

  /* Set each h3 container to take up equal width (1/3) */
  .h3-item {
    flex: 1; /* Equal width for all containers */
    text-align: center; /* Center the content horizontally */
  }

  /* Add styles for h1 and h2 */
  h1 {
    text-align: center;
    font-weight: bold; /* Make h1 bold */
    font-size: 3em; /* Adjust the font size as needed */
    color: #ff424e;
    font-style: italic;
  }

  h2 {
    text-align: center;
    font-weight: bold; /* Make h1 bold */
    font-size: 2em; /* Adjust the font size as needed */
  }

  h3 {
    text-align: center;
    font-weight: bold; /* Make h1 bold */
    font-size: 1.5em; /* Adjust the font size as needed */
  }
`;

export const StyledIcon = styled.span`
  margin-right: 20px; /* Adjust the margin as needed */
  margin-left: 20px; /* Adjust the margin as needed */
  font-weight: light; /* Make the icons slightly bolder */
  font-size: 1.5em; /* Make the icons slightly bigger */
`;
