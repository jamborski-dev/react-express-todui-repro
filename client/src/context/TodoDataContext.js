import React, { createContext, useState } from 'react';
import { todos as initialData } from '../__mock-data';

export const TodoDataContext = createContext(null);

export const TodoDataProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialData);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const toggleTodo = id => {
    setCurrentTodoId(id);
  };

  const markImportant = (id = currentTodoId) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id
          ? { ...todo, is_important: !todo.is_important }
          : todo
      )
    );
  };

  const markDone = (id = currentTodoId) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, is_done: !todo.is_done } : todo
      )
    );
  };

  return (
    <TodoDataContext.Provider
      value={{
        todos,
        setTodos,
        currentTodoId,
        setCurrentTodoId,
        toggleTodo,
        markImportant,
        markDone,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
