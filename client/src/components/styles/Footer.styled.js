import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Set your desired background color */
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center; /* Center the text within the list */
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; /* Set the default link color */

  &.active {
    font-weight: bold;
  }
`;

export const StyledIcon = styled.span`
  margin-right: 20px; /* Adjust the margin as needed */
  margin-left: 20px; /* Adjust the margin as needed */
  font-weight: light; /* Make the icons slightly bolder */
  font-size: 1.5em; /* Make the icons slightly bigger */
`;
