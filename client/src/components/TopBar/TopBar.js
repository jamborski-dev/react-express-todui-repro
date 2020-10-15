import React from 'react';
import styled from 'styled-components';

import { StyledTopBar } from './StyledTopBar';
import { StyledSearchBar } from './StyledSearchBar';
import { StyledSearchInput } from './StyledSearchInput';
import {
  Bell,
  ChevronDown,
  Search,
} from 'react-bootstrap-icons';

const SearchIconContainer = styled.span`
  width: 2rem;
  margin-left: 1.5rem;
  padding-top: 3px;
`;

const NotificationContainer = styled.div`
  height: 100%;
  border-left: 1px solid var(--layout-border);
  border-right: 1px solid var(--layout-border);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const IconContainer = styled.span`
  width: 40%;

  > svg {
    width: 100%;
    height: auto;
  }
`;

const NotificationDot = styled.span`
  background: red;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  top: 14px;
  left: 30px;
  position: absolute;
  border: 2px solid #f4f5f7;
`;

const ProfileMenuContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    height: auto;
    width: 100%;
    margin-top: -6px;
  }
`;

const TopBar = () => {

  return (
    <StyledTopBar>
      <StyledSearchBar>
        <SearchIconContainer>
          <Search />
        </SearchIconContainer>
        <StyledSearchInput type="text" name="search" placeholder="Search..." />
      </StyledSearchBar>
      <NotificationContainer>
        <IconContainer>
          <Bell />
        </IconContainer>
        <NotificationDot />
      </NotificationContainer>
      <ProfileMenuContainer>
        <Avatar>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt="user profile"
          />
        </Avatar>
        <span>Lucas Powell</span>
          <ChevronDown />
      </ProfileMenuContainer>
    </StyledTopBar>
  );
};

export default TopBar;
