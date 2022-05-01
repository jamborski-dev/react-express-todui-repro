import styled from 'styled-components';

export const StyledListView = styled.section`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  background: #fafbfc;
  border-bottom: 1px solid var(--layout-border);
  border-right: 1px solid var(--layout-border);
`;

export const StyledListHeader = styled.div`
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

export const StyledListItem = styled.div`
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

export const StyledListItemContent = styled.div`
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

export const EmptyList = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-size: 0.75rem;
  color: #b0b0b0;
  font-style: italic;
  padding-top: 3rem;
`;