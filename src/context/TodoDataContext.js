import React, { createContext, useState } from 'react';
import { todos as initialData } from '../__mock-data';
import { formatDate } from '../utils/helpers';

export const TodoDataContext = createContext(null);

export const TodoDataProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialData);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [filtered, setFiltered] = useState(todos);
  const [listTitle, setListTitle] = useState('Overview');

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

  const applyFilter = (filter, allTodos = todos) => {

    setListTitle(filter);

    if (filter === 'overview') {
      setFiltered(allTodos);
    }

    if (filter === 'done') {
      setFiltered(allTodos.filter(todo => todo.is_done === true));
    }
    
    if (filter === 'today') {
      
      console.log(formatDate.getDate(Date.now()));
      setFiltered(allTodos.filter(todo => formatDate.getDate(todo.reminder) === formatDate.getDate(Date.now())));
    }
    
    if (filter === 'important') {
      setFiltered(allTodos.filter(todo => todo.is_important === true));
    }
    
    if (filter === 'scheduled') {
      setFiltered(allTodos.filter(todo => todo.reminder !== null));
    }
    
    if (filter === 'design' || filter === 'marketing' || filter === 'development') {
      setFiltered(allTodos.filter(todo => todo.category === filter));
    }
  }

  const markAllDone = () => {
    setTodos(todos => todos.map(todo => todo.is_done === false ? { ...todo, is_done: true } : todo ));
  }
  const markAllImportant = () => {
    setTodos(todos => todos.map(todo => todo.is_important === false ? { ...todo, is_important: true } : todo ));
  }

  const addTodo = () => {
  }

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
        addTodo,
        filtered,
        applyFilter,
        listTitle,
        markAllDone,
        markAllImportant,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
