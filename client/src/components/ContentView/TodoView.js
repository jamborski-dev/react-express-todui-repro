
import React, { useContext, useState, createRef } from 'react';
import styled from 'styled-components';

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

const StyledTodoView = styled.div`
  padding: 2rem 1.5rem;
  padding-bottom: 0;
  padding-right: 4rem;
  height: 100%;

  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto minmax(70px, auto);
  grid-template-areas:
    'aside content'
    '. footer';
`;

const TodoViewColumn = styled.div`
  padding: 0 0.5rem;
`;
const TodoViewHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  > h1 {
    font-size: 1.5rem;
    margin: 0;
  }
  > span {
    display: flex;
    flex-flow: row nowrap;
  }
`;

const TodoViewContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
const TodoViewFooter = styled.div`
  grid-area: footer;
`;

const StyledTextButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;
  color: #62a4fe;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;

  > svg {
    color: var(--dark-grey);
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const TodoSteps = styled.div`
  margin-bottom: 3rem;

  > ul > li {
    margin-bottom: 0.5rem;
  }

  > ul > li > input {
    margin-right: 8px;
  }
`;
const Attachments = styled.div``;
const AddNotesContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: calc(100% - 2rem);

  border-radius: 5px 5px 0 0;
  background: #edf4ff;
  color: #8f9bb0;
  padding: 0;
  margin: 0;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: calc(100% - 30px - 2rem);
  padding: 1rem;
  background: none;
  border: none;

  &:focus {
    outline: 1px dotted #1f1f1f;
  }
`;

const AddNotesButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: #61a4fe;
  color: #fff;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoView = () => {
  const { todos, currentTodoId, markImportant, markDone } = useContext(TodoDataContext);
  const { openModal } = useContext(ModalContext);
  const [todo] = todos.filter(todo => todo.id === currentTodoId);

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = createRef();
  useOutsideClick(dropdownRef, () => {
    setOpenDropdown(false);
  });


  return (
    <StyledTodoView>
      <Checkbox checked={todo.is_done} onClick={() => {markDone()}} />
      <TodoViewColumn>
        <TodoViewHeader> 
            <h1>{todo.title}</h1>
            <span>
              <Button onClick={() => markImportant()} iconSize='1.2rem' position='right'>
                { todo.is_important ? <StarFill /> : <Star /> }
              </Button>
              <DropdownContainer>
                <Button 
                  onClick={() => setOpenDropdown(!openDropdown)}
                  iconSize="1.2rem" position="right">
                  <ThreeDotsVertical />
                </Button>
                {openDropdown && 
                  <Dropdown ref={dropdownRef}>
                    <li onClick={() => openModal()}><Pen />Edit</li>
                    <li><Share />Share with friends</li>
                    <li><Archive />Archive</li>
                    <li><Trash />Delete</li>
                  </Dropdown>}
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
        <TodoViewContent
          dangerouslySetInnerHTML={{ __html: todo.notes }}
        />
        <TodoSteps>
          <StyledTextButton>
            <Plus /> Add step
          </StyledTextButton>
          <ul>
            {todo.step_list.map(step => (
              <li key={step.id}>
                <input type="checkbox" name={step.step_content}/>
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
  )
}

export default TodoView;
