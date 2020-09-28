import React from 'react';
import styled from 'styled-components';

export const DropdownContainer = styled.span`
  position: relative;
`;

const StyledDropdown = styled.div`
  font-size: 1rem;
  padding: 0.75rem;
  background: #fff;
  border-radius: 22px;
  position: absolute;
  z-index: 1000;
  top: 3rem;
  left: 0;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  transform: ${props => props.open ? 'translateX(-70%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-50%) scale(.2)'};
  opacity: ${props => props.open ? 1 : 0};
  transition: all .15s;

  > ul li {
    padding: 0.75rem;
    margin: 0.5rem 0;
    border-radius: 15px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    white-space: nowrap;
    text-align: left;
    cursor: pointer;
  }

  > ul li svg {
    --size: ${props => props.iconSize ? props.iconSize : '18px'};
    height: var(--size);
    width: auto;
    margin-right: 1rem;
  }

  > ul li:nth-child(1) {
    margin-top: 0;
  }
  > ul li:last-child {
    margin-bottom: 0;
  }
  > ul li:hover {
    color: var(--blue);
    background: var(--menu-hover);
  }
`;

const Dropdown = ({ open, children }) => {
  return (
    <StyledDropdown open={open}>
      {children}
    </StyledDropdown>
  )
}

export default Dropdown;