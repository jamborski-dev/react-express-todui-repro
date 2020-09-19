import React from 'react';
import { StyledNavItem } from './StyledNavItem';
import { StyledNavList } from './StyledNavList.js';

const Nav = ({ menuItems }) => {
  return (
    <nav>
      <StyledNavList>
        {menuItems.map(item => (
          <StyledNavItem key={item.name}>
            <span className={item.color ? `color-icon ${item.color}` : ''}>
              {item.icon ? item.icon : item.color ? '' : null}
            </span>
            <span>{item.name}</span>
            <span
              className={
                item.howMany ? (item.color ? item.color : '') : 'empty'
              }
            >
              {item.howMany ? item.howMany : null}
            </span>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </nav>
  );
};

export default Nav;
