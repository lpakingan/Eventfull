import React from 'react';
import { StyledFooter, StyledList, StyledListItem, StyledLink } from './styles/Footer.styled';
import { useMatch, useResolvedPath } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <CustomLink to="/explore" className="active">
          Explore
        </CustomLink>
        <CustomLink to="/" className="active">
          Home
        </CustomLink>
        <CustomLink to="/social" className="active">
          Social
        </CustomLink>
      </StyledList>
    </StyledFooter>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const is = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <StyledListItem className={is === to ? "" : ""}>
      <StyledLink to={to}{...props}>
        {children}
      </StyledLink>
    </StyledListItem>
  );
}
