import { todos } from '../../__mock-data';
import { formatDate } from '../../utils/helpers';

import React from 'react';
import styled from 'styled-components';
import { StyledContentView } from './StyledContentView';
import { TodoDetails } from '../shared/TodoDetails';
import Checkbox from '../shared/Checkbox';
import {
  Stopwatch,
  ThreeDotsVertical,
  Star,
  Bell,
  Plus,
  ArrowRepeat,
  Paperclip,
  Pen,
} from 'react-bootstrap-icons';

const TodoView = styled.div`
  padding: 2rem 1.5rem;
  padding-bottom: 0;
  padding-right: 4rem;
  height: 100%;

  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto auto;
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
  margin-bottom: 3rem;

  > div {
    width: 70%;
  }

  > div > h1 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  > span > svg {
    width: 18px;
    height: 18px;
    margin-left: 2rem;
  }
`;
const TodoViewContent = styled.div`
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
  height: 100%;

  border-radius: 5px 5px 0 0;
  background: #edf4ff;
  padding: 1rem 2rem;
  color: #8f9bb0;
  padding-bottom: 0;
  margin: 0;
`;

const StyledTextArea = styled.textarea`
  height: 150px;
  background: none;
  border: none;
`;

const AddNotesButton = styled.button`
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

const ContentView = () => {
  return (
    <StyledContentView>
      <TodoView>
        <Checkbox />
        <TodoViewColumn>
          <TodoViewHeader>
            <div>
              <h1>Create styleguide for aseio</h1>
              <TodoDetails>
                <span>
                  <Stopwatch />
                  <p>{formatDate.getDate(todos[0].remind_at)}</p>
                </span>
                <span>
                  <Bell />
                  <p>Remind me at {formatDate.getUKTime(todos[0].remind_at)}</p>
                </span>
              </TodoDetails>
            </div>
            <span>
              <Star />
              <ThreeDotsVertical />
            </span>
          </TodoViewHeader>
          <TodoViewContent
            dangerouslySetInnerHTML={{ __html: todos[0].content }}
          />
          <TodoSteps>
            <StyledTextButton>
              <Plus /> Add step
            </StyledTextButton>
            <ul>
              <li>
                <input type="checkbox" />
                <label>started sprint</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Get Developer's inputs</label>
              </li>
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
      </TodoView>
    </StyledContentView>
  );
};

export default ContentView;
