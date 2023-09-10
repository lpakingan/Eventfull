import { StyledHeader, StyledNav } from "./styles/Header.styled"

export default function Header() {
    return (
        <StyledHeader>
            <h1>Site Name</h1>
            <StyledNav>
            <h4>Explore</h4>
            <h4>Social</h4>
            <h4>Profile</h4>
            </StyledNav>
        </StyledHeader>
    )
}