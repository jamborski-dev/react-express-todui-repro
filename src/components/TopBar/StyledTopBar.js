import styled from 'styled-components';

export const StyledTopBar = styled.header`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  background: #f4f5f7;
  border-bottom: 1px solid var(--layout-border);

  display: grid;
  grid-template-columns: auto 60px minmax(180px, 225px);
  grid-gap: 0;

  margin: 0;
  padding: 0;
  align-items: center;
  justify-items: stretch;
`;
