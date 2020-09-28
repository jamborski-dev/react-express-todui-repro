import React, { useContext } from 'react';
import { StyledNavItem } from './StyledNavItem';
import { StyledNavList } from './StyledNavList.js';

import { TodoDataContext } from '../../context/TodoDataContext';

const Nav = ({ menuItems }) => {
  const { applyFilter } = useContext(TodoDataContext);

  return (
    <nav>
      <StyledNavList>
        {menuItems.map(item => (
          <StyledNavItem key={item.name} onClick={() => applyFilter(item.filter)}>
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
