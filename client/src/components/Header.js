import { StyledHeader, StyledLogo, StyledProfileIcon } from "./styles/Header.styled";
import logo from "../assets/eventfull_logo.png";
import profileIcon from "../assets/profile-1.png"; 
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                <StyledLogo src={logo} alt="logo" />
            </Link>
            <Link to="/profile">
                <StyledProfileIcon src={profileIcon} alt="profile icon" />
            </Link>
        </StyledHeader>
    );
}