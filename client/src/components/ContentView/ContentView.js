import React, { useContext } from 'react';
import { TodoDataContext } from '../../context/TodoDataContext';

import { StyledContentView } from './ContentView.styles';
import DefaultView from './EmptyView';
import TodoView from './TodoView';

const ContentView = () => {
  const { currentTodoId } = useContext(TodoDataContext);

  return (
    <StyledContentView>
      { currentTodoId !== null ? <TodoView /> : <DefaultView /> }
    </StyledContentView>
  );
};

export default ContentView;
