import React, { useContext, useState, createRef } from 'react';

import { formatDate } from '../../utils/helpers';
import { TodoDataContext } from '../../context/TodoDataContext';
import { ModalContext } from '../../context/ModalContext';

import useOutsideClick from '../../hooks/useOutsideClick';

import { TodoDetails } from '../shared/TodoDetails';
import Checkbox from '../shared/Checkbox';
import Button from '../shared/Button';
import Dropdown, { DropdownContainer } from '../shared/Dropdown';
import {
  Stopwatch,
  ThreeDotsVertical,
  Star,
  StarFill,
  Bell,
  Plus,
  ArrowRepeat,
  Paperclip,
  Pen,
  Share,
  Archive,
  Trash,
} from 'react-bootstrap-icons';

import {
  StyledTodoView,
  TodoViewColumn,
  TodoViewHeader,
  TodoViewContent,
  TodoViewFooter,
  StyledTextButton,
  TodoSteps,
  Attachments,
  AddNotesContainer,
  AddNotesButton,
  StyledTextArea,
} from './ContentView.styles.js';

const TodoView = () => {
  const { todos, currentTodoId, markImportant, markDone } = useContext(
    TodoDataContext
  );
  const { openModal } = useContext(ModalContext);
  const [todo] = todos.filter(todo => todo.id === currentTodoId);

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = createRef();
  useOutsideClick(dropdownRef, () => {
    setOpenDropdown(false);
  });

  return (
    <StyledTodoView>
      <Checkbox
        checked={todo.is_done}
        onClick={() => {
          markDone();
        }}
      />
      <TodoViewColumn>
        <TodoViewHeader>
          <h1>{todo.title}</h1>
          <span>
            <Button
              onClick={() => markImportant()}
              iconSize="1.2rem"
              position="right"
            >
              {todo.is_important ? <StarFill /> : <Star />}
            </Button>
            <DropdownContainer>
              <Button
                onClick={() => setOpenDropdown(!openDropdown)}
                iconSize="1.2rem"
                position="right"
              >
                <ThreeDotsVertical />
              </Button>
              {openDropdown && (
                <Dropdown ref={dropdownRef}>
                  <li onClick={() => openModal()}>
                    <Pen />
                    Edit
                  </li>
                  <li>
                    <Share />
                    Share with friends
                  </li>
                  <li>
                    <Archive />
                    Archive
                  </li>
                  <li>
                    <Trash />
                    Delete
                  </li>
                </Dropdown>
              )}
            </DropdownContainer>
          </span>
        </TodoViewHeader>
        <TodoDetails>
          <span>
            <Stopwatch />
            <p>{formatDate.getDate(todo.reminder)}</p>
          </span>
          <span>
            <Bell />
            <p>Remind me at {formatDate.getUKTime(todo.reminder)}</p>
          </span>
        </TodoDetails>
        <TodoViewContent dangerouslySetInnerHTML={{ __html: todo.notes }} />
        <TodoSteps>
          <StyledTextButton>
            <Plus /> Add step
          </StyledTextButton>
          <ul>
            {todo.step_list.map(step => (
              <li key={step.id}>
                <input type="checkbox" name={step.step_content} />
                <label htmlFor={step.step_content}>{step.step_content}</label>
              </li>
            ))}
          </ul>
        </TodoSteps>
        <StyledTextButton>
          <ArrowRepeat /> Repeat
        </StyledTextButton>
      </TodoViewColumn>
      <TodoViewFooter>
        <Attachments>
          <StyledTextButton>
            <Paperclip /> Add file
          </StyledTextButton>
        </Attachments>
        <AddNotesContainer>
          <StyledTextArea placeholder="Add notes.." />
          <AddNotesButton>
            <Pen />
          </AddNotesButton>
        </AddNotesContainer>
      </TodoViewFooter>
    </StyledTodoView>
  );
};

export default TodoView;
