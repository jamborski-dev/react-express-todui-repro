import styled from 'styled-components';

export const StyledSideBar = styled.aside`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  background: #fff;
  border-right: 1px solid var(--layout-border);

  padding: 1rem;
`;

export const StyledLogo = styled.h1`
  margin: 0;
  padding: 0;
  color: var(--orange);
  font-family: Roboto;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-left: 0.75rem;
`;