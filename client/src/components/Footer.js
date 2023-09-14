import React from 'react';
import { StyledFooter, StyledList, StyledListItem, StyledLink } from './styles/Footer.styled';
import { useMatch, useResolvedPath } from 'react-router-dom';
import Icon from './icons';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <CustomLink to="/explore" className="active">
          <Icon icon="ph:compass-light" />
          Explore
        </CustomLink>
        <CustomLink to="/" className="active">
        <Icon icon="iconoir:home" />
          Home
        </CustomLink>
        <CustomLink to="/social" className="active">
          <Icon icon="lucide:party-popper" />
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
