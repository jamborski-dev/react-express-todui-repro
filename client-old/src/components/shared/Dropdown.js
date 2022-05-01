import React, { forwardRef } from 'react';
import styled from 'styled-components';
import useViewBoundries from '../../hooks/useViewBoundries';

export const DropdownContainer = styled.span`
  position: relative;
`;

const StyledDropdown = styled.div`
  font-size: 1rem;
  padding: 0.75rem;
  background: #fff;
  border-radius: var(--border-radius);
  position: absolute;
  z-index: 1000;
  top: 3rem;
  left: ${props => (props.offsetX > 0 ? `-${props.offsetX + 45}px` : 0)};
  box-shadow: var(--box-shadow);

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
    --size: ${props => (props.iconSize ? props.iconSize : '18px')};
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

const Dropdown = forwardRef(({ children }, ref ) => {

  const offset = useViewBoundries(ref);

  return (
      <StyledDropdown ref={ref} offsetX={offset}>
        <ul>
          {children}
        </ul>
      </StyledDropdown>
  )});

export default Dropdown;
