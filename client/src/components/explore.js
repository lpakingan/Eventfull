import React from 'react';
import { SearchBar } from './styles/explore.styled';
import { SearchInput } from './styles/explore.styled';


export default function SocialFeed() {
  return (
      <SearchBar>
        <SearchInput type="text" placeholder="Search events..." />
      </SearchBar>
  );
}
