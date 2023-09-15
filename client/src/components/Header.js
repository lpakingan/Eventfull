import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import logo from "../assets/eventfull_logo.png";
import { Link } from "react-router-dom";
import Icon from "./icons";
import Logout from "./Logout";

export default function Header() {
  const isLoggedIn = localStorage.getItem("id_token");
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile">
            <Icon icon="akar-icons:person" />
          </Link>
          <Logout />
        </>
      ) : (
        <Link to="/login">
          <Icon icon="akar-icons:person" />
        </Link>
      )}
    </StyledHeader>
  );
}
