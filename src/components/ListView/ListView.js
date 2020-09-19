import { todos } from '../../__mock-data';
import { formatDate } from '../../utils/helpers';

import React from 'react';
import styled from 'styled-components';
import { StyledListView } from './StyledListView';
import { TodoDetails } from '../shared/TodoDetails';
import Checkbox from '../shared/Checkbox';
import {
  Bell,
  Star,
  StarFill,
  ArrowDownUp,
  ThreeDotsVertical,
  FileEarmark,
  Stopwatch,
} from 'react-bootstrap-icons';

const StyledListHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 5px solid var(--blue);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  > h3 {
    display: inline;
    margin: 0;
  }

  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

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
  return (
    <StyledListView>
      <StyledListHeader>
        <h3>DESIGN</h3>
        <span>
          <ArrowDownUp />
          <ThreeDotsVertical />
        </span>
      </StyledListHeader>
      <div>
        <ul>
          {todos.map(todo => (
            <StyledListItem key={todo.id}>
              <Checkbox />
              <StyledListItemContent>
                <h4>{todo.title}</h4>
                <TodoDetails>
                  <span>
                    <Stopwatch />
                    <p>{formatDate.getDate(todo.remind_at)}</p>
                  </span>
                  <span>
                    <FileEarmark />
                  </span>
                  <span>
                    <Bell />
                  </span>
                </TodoDetails>
              </StyledListItemContent>
              {todo.important ? <StarFill /> : <Star />}
            </StyledListItem>
          ))}
        </ul>
      </div>
    </StyledListView>
  );
};

export default ListView;
