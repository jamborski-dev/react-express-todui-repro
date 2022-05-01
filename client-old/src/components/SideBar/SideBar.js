import { menuItemsPrimary, menuItemsSecondary } from '../../__mock-data';

import React from 'react';
import Nav from '../Navigation';
import AddButton from '../shared/AddButton';
import { StyledSideBar, StyledLogo } from './SideBar.styles';

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
