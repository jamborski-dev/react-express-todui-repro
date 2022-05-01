import React, { useContext, useState, createRef } from 'react';
import { TodoDataContext } from '../../context/TodoDataContext';
import useOutsideClick from '../../hooks/useOutsideClick';
import { formatDate } from '../../utils/helpers';

import { 
  StyledListView,
  StyledListHeader,
  StyledListItem,
  StyledListItemContent,
  EmptyList
} from './ListView.styles';
import { TodoDetails } from '../shared/TodoDetails';
import Dropdown, { DropdownContainer } from '../shared/Dropdown';
import Checkbox from '../shared/Checkbox';
import Button from '../shared/Button';

import {
  Bell,
  Star,
  StarFill,
  ArrowDownUp,
  ThreeDotsVertical,
  FileEarmark,
  Stopwatch,
  CheckCircleFill,
} from 'react-bootstrap-icons';


const ListView = () => {
  const { 
    toggleTodo, 
    markDone, 
    markImportant,
    listTitle,
    filtered,
    markAllDone,
    markAllImportant,
  } = useContext(TodoDataContext);

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = createRef();
  
  useOutsideClick(dropdownRef, () => {
    setOpenDropdown(false);
  });

  return (
    <StyledListView>
      <StyledListHeader>
      <h3>{listTitle.toUpperCase()}</h3>
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
            {openDropdown && 
              <Dropdown ref={dropdownRef}>
                <li onClick={() => markAllDone()}><CheckCircleFill />Mark all done</li>
                <li onClick={() => markAllImportant()}><StarFill />Mark all important</li>
              </Dropdown>}
          </DropdownContainer>
        </span>
      </StyledListHeader>
      <div>
        <ul>
          { filtered.length === 0 ? 
            <EmptyList>
              <p>There is nothing to show..</p>
            </EmptyList>
          
            : filtered.map(todo => (
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
