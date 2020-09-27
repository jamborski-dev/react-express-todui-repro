import React, { useContext } from 'react';
import { TodoDataContext } from '../../context/TodoDataContext';

import { StyledContentView } from './StyledContentView';
import TodoView from './TodoView';
import DefaultView from './DefaultView';

const ContentView = () => {
  const { currentTodoId } = useContext(TodoDataContext);

  return (
    <StyledContentView>
      { currentTodoId !== null ? <TodoView /> : <DefaultView /> }
    </StyledContentView>
  );
};

export default ContentView;
