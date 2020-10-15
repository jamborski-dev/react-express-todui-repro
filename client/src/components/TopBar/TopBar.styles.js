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

export const StyledSearchBar = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  outline: none;
`;

export const SearchIconContainer = styled.span`
  width: 2rem;
  margin-left: 1.5rem;
  padding-top: 3px;
`;

export const NotificationContainer = styled.div`
  height: 100%;
  border-left: 1px solid var(--layout-border);
  border-right: 1px solid var(--layout-border);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const IconContainer = styled.span`
  width: 40%;

  > svg {
    width: 100%;
    height: auto;
  }
`;

export const NotificationDot = styled.span`
  background: red;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  top: 14px;
  left: 30px;
  position: absolute;
  border: 2px solid #f4f5f7;
`;

export const ProfileMenuContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    height: auto;
    width: 100%;
    margin-top: -6px;
  }
`;

