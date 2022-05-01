import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  background: none;
  box-sizing: content-box;
  border: none;
  padding: 7px;
  border-radius: 30px;
  color: var(--navy);
  height: ${props => props.iconSize};
  width: ${props => props.iconSize};
  margin: ${props => (props.position === 'left' ? '0 1rem 0 0' : '0 0 0 1rem')};

  cursor: pointer;
  position: relative;

  > svg {
    height: ${props => props.iconSize};
    width: ${props => props.iconSize};
  }

  &:hover {
    color: var(--blue);
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ children, ...props }) => {
  return (
      <StyledButton {...props}>{children}</StyledButton>
  );
};

export default Button;
