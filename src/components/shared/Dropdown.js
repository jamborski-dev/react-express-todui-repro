import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Button from './Button';

export const DropdownContainer = styled.span`
  position: relative;
`;

const trClassPrefix = 'dropdown';
const timeout = 150;

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

  &.${trClassPrefix}-enter {
    opacity: 0;
    transform: scale(0.7) translateY(-50%);
    will-change: opacity, transform;
  }
  &.${trClassPrefix}-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: opacity ${timeout}ms, transform ${timeout}ms;
  }

  &.${trClassPrefix}-exit {
    opacity: 1;
    transform: scale(1);
    will-change: opacity, transform;
  }
  &.${trClassPrefix}-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity ${timeout}ms, transform ${timeout}ms;
  }

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

const Dropdown = ({ children, icon }) => {
  const [show, setShow] = useState(false);
  const [offsetX, setOffsetX] = useState(null);
  const ref = useRef(null);

  const handleClick = () => {
    setShow(show => !show);
  };

  // TODO: bug - first render does not apply offset to the compnent 
  useEffect(() => {
    const dropdown = ref.current;
    const clientWidth = window.innerWidth;
    if (dropdown) {
      const { left, width } = dropdown.getBoundingClientRect();
      const dropdownBoundry = left + width;

      if (dropdownBoundry > clientWidth) {
        const offset = dropdownBoundry - clientWidth;
        setOffsetX(offset);
      }
    }
  }, [ref, show]);

  return (
    <DropdownContainer>
      <Button onClick={() => handleClick()} iconSize="1.2rem" position="right">
        {icon}
      </Button>
      <CSSTransition
        in={show}
        timeout={timeout}
        classNames="dropdown"
        unmountOnExit
        nodeRef={ref}
      >
        <StyledDropdown ref={ref} offsetX={offsetX}>
          {children}
        </StyledDropdown>
      </CSSTransition>
    </DropdownContainer>
  );
};

export default Dropdown;
