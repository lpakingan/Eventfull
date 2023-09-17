import React from 'react';
import { StyledFooter, StyledList, StyledListItem, StyledLink, StyledIcon } from './styles/Footer.styled';
import { useMatch, useResolvedPath } from 'react-router-dom';
import Icon from './icons';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <CustomLink to="/explore" className="active">
          <StyledIcon><Icon icon="eos-icons:compass" /></StyledIcon>
        </CustomLink>
        <CustomLink to="/" className="active">
          <StyledIcon><Icon icon="clarity:home-solid" /></StyledIcon>
        </CustomLink>
        <CustomLink to="/social" className="active">
          <StyledIcon><Icon icon="lucide:party-popper" /></StyledIcon>
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
