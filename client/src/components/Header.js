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
        <div className="nav-right">
          <Link to="/profile">
            <p>Profile</p>
            <span>
            <Icon icon="akar-icons:person" />
            </span>
          </Link>
          <Logout />
        </div>
        </>
      ) : (
        <div className="nav-right">
        <Link to="/signup">
          <p>Signup</p>
          <span>
          <Icon icon="akar-icons:person-add" />
          </span>
        </Link>
        <Link to="/login">
          <p>Login</p>
          <span>
          <Icon icon="akar-icons:person" />
          </span>
        </Link>
        </div>
      )}
    </StyledHeader>
  );
}
