import React from 'react';

import { 
  StyledTopBar, 
  StyledSearchBar, 
  StyledSearchInput,
  SearchIconContainer,
  NotificationContainer,
  ProfileMenuContainer,
  IconContainer,
  NotificationDot,
  Avatar
} from './TopBar.styles.js';
import {
  Bell,
  ChevronDown,
  Search,
} from 'react-bootstrap-icons';

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
