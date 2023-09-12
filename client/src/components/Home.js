import React from 'react';
import { StyledSocialFeed } from './styles/socialFeed.styled';
import { PostContainer } from './styles/socialFeed.styled';
import { UserImage } from './styles/socialFeed.styled';
import { UserInfo } from './styles/socialFeed.styled';
import { UserName } from './styles/socialFeed.styled';
import { PostContent } from './styles/socialFeed.styled';


export default function SocialFeed() {
    return (
      <StyledSocialFeed>
        <h1>Live Feed</h1>
        {/* Example posts */}
        <PostContainer>
          <UserImage />
          <UserInfo>
            <UserName>User123</UserName>
            <PostContent>
              iahdsfashfalkjsdf.
            </PostContent>
          </UserInfo>
        </PostContainer>
  
        <PostContainer>
          <UserImage />
          <UserInfo>
            <UserName>User456</UserName>
            <PostContent>
              asdfksadfkjafds
            </PostContent>
          </UserInfo>
        </PostContainer>
        {/* Add more posts as needed */}
      </StyledSocialFeed>
    );
  }
  
  
  
  
  
