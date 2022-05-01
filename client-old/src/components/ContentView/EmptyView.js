import React, { useContext } from 'react';
import styled from 'styled-components';
import AddButton from '../shared/AddButton';

import { TodoDataContext } from '../../context/TodoDataContext';

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const DefaultView = () => {
  const { addTodo } = useContext(TodoDataContext);

  return (
    <FlexContainer>
      <p>Select note from the list <strong>or</strong> add new...</p>
      <AddButton onClick={() => addTodo()} />
    </FlexContainer>
  )
}

export default DefaultView;
