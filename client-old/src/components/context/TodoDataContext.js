import React, { createContext, useState } from 'react';
import { todos as initialData } from '../__mock-data';
import { formatDate } from '../utils/helpers';

export const TodoDataContext = createContext(null);

export const TodoDataProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialData);
  const [filtered, setFiltered] = useState(todos);
  const [currentTodoId, setCurrentTodoId] = useState(null);
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

    setFiltered(todos =>
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

    setFiltered(todos =>
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
    const ids = [];
    setFiltered(todos => todos.map(todo => {
      let updatedTodo;
      if (!todo.is_done) {
        updatedTodo = { ...todo, is_done: true };
        ids.push(todo.id);
        return updatedTodo;
      }
      return todo;
    }));

    ids.forEach(id => {
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, is_done: true } : todo));
    });
    
  }
  const markAllImportant = () => {
    const ids = [];
    setFiltered(todos => todos.map(todo => {
      let updatedTodo;
      if (!todo.is_important) {
        updatedTodo = { ...todo, is_important: true };
        ids.push(todo.id);
        return updatedTodo;
      }
      return todo;
    }));

    ids.forEach(id => {
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, is_important: true } : todo));
    });
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
        setFiltered,
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
