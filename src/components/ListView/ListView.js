import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoDataContext } from '../../context/TodoDataContext';

import { formatDate } from '../../utils/helpers';
import { StyledListView } from './StyledListView';
import { TodoDetails } from '../shared/TodoDetails';
import Checkbox from '../shared/Checkbox';
import Button from '../shared/Button';
import Dropdown, { DropdownContainer } from '../shared/Dropdown';

import {
  Bell,
  Star,
  StarFill,
  ArrowDownUp,
  ThreeDotsVertical,
  FileEarmark,
  Stopwatch,
  Check,
} from 'react-bootstrap-icons';

const StyledListHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 5px solid var(--blue);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  > h3 {
    /* display: inline; */
    margin: 0;
  }

  > span {
    display: flex;
    flex-flow: row nowrap;
  }
`;

// TODO - merge above to HeaderBar / menu
//   with TodoViewHeader

const StyledListItem = styled.div`
  border-bottom: 1px solid var(--layout-border);
  padding: 1.5rem 1.5rem;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  transition: background 0.1s ease-out;
  cursor: pointer;

  > svg {
    cursor: pointer;
    width: auto;
    width: 20px;
    height: 20px;
  }

  :hover {
    background: var(--menu-hover);
  }
`;

const StyledListItemContent = styled.div`
  width: 100%;
  margin-left: 1rem;

  > h4 {
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const ListView = () => {
  const { 
    todos, 
    toggleTodo, 
    markDone, 
    markImportant,
    filtered
  } = useContext(TodoDataContext);

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <StyledListView>
      <StyledListHeader>
        <h3>DESIGN</h3>
        <span>
          <Button iconSize="1.2rem" position="right">
            <ArrowDownUp />
          </Button>
          <DropdownContainer>
            <Button 
              onClick={() => setOpenDropdown(!openDropdown)}
              iconSize="1.2rem" position="right">
              <ThreeDotsVertical />
            </Button>
            <Dropdown open={openDropdown}>
              <ul>
                <li><Check width="50" height="50" />Toggle all done</li>
                <li><Star />Toggle all important</li>
              </ul>
            </Dropdown>
          </DropdownContainer>
        </span>
      </StyledListHeader>
      <div>
        <ul>
          {filtered.map(todo => (
            <StyledListItem key={todo.id} onClick={() => toggleTodo(todo.id)}>
              <Checkbox
                checked={todo.is_done}
                onClick={() => markDone(todo.id)}
              />
              <StyledListItemContent>
                <h4>{todo.title}</h4>
                <TodoDetails>
                  { todo.reminder ? 
                      <span>
                        <Stopwatch />
                        <p>{formatDate.getDate(todo.reminder)}</p>
                      </span>
                    : null }
                  { todo.attachments ? 
                      <span>
                        <FileEarmark />
                      </span>
                    : null }
                  { todo.reminder ? 
                    <span>
                      <Bell />
                    </span>
                    : null }
                </TodoDetails>
              </StyledListItemContent>
              <Button iconSize="1.2rem" onClick={() => markImportant(todo.id)}>
                {todo.is_important ? <StarFill /> : <Star />}
              </Button>
            </StyledListItem>
          ))}
        </ul>
      </div>
    </StyledListView>
  );
};

export default ListView;
