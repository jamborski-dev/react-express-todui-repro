import { menuItemsPrimary, menuItemsSecondary } from '../../__mock-data';

import React from 'react';
import Nav from '../Navigation';
import { StyledSideBar } from './StyledSideBar';
import { StyledLogo } from '../Logo/StyledLogo';
import AddButton from '../shared/AddButton';

const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledLogo>TODUI</StyledLogo>
      <Nav menuItems={menuItemsPrimary} />
      <Nav menuItems={menuItemsSecondary} />
      <AddButton />
    </StyledSideBar>
  );
};

export default SideBar;
