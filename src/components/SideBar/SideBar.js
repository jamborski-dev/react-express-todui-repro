import { menuItemsPrimary, menuItemsSecondary } from '../../__mock-data';

import React from 'react';
import Nav from '../Navigation';
import { StyledSideBar } from './StyledSideBar';
import { StyledLogo } from '../Logo/StyledLogo';

const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledLogo>TODUI</StyledLogo>
      <Nav menuItems={menuItemsPrimary} />
      <Nav menuItems={menuItemsSecondary} />
      {/* add ADD button */}
    </StyledSideBar>
  );
};

export default SideBar;
