import styled from 'styled-components';

export const StyledContentView = styled.main`
  background: #fff;
`;

export const StyledTodoView = styled.div`
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

export const TodoViewColumn = styled.div`
  padding: 0 0.5rem;
`;
export const TodoViewHeader = styled.div`
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

export const TodoViewContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
export const TodoViewFooter = styled.div`
  grid-area: footer;
`;

export const StyledTextButton = styled.button`
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

export const TodoSteps = styled.div`
  margin-bottom: 3rem;

  > ul > li {
    margin-bottom: 0.5rem;
  }

  > ul > li > input {
    margin-right: 8px;
  }
`;
export const Attachments = styled.div``;
export const AddNotesContainer = styled.div`
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

export const StyledTextArea = styled.textarea`
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

export const AddNotesButton = styled.button`
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
