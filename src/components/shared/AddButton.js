import React from 'react';
import styled from 'styled-components';
import { Plus } from 'react-bootstrap-icons';
import { StyledButton } from './Button';

const StyledAddButton = styled(StyledButton)`
  color: #fff;
  background: var(--salmon);
  height: 2rem;
  width: 2rem;
  margin: 1rem auto;

  > svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    background: #ff7552b3;
    color: #fff;
  }
`;

const AddButton = ({ ...props }) => {
  return (
    <StyledAddButton {...props} >
      <Plus />
    </StyledAddButton>
  )
}

export default AddButton;
