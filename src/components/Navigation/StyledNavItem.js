import styled from 'styled-components';
import { colors } from '../../GlobalStyles';

export const StyledNavItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 0.75rem;

  border-radius: 0 100px 100px 0;
  height: 2.5rem;

  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  transition: background 0.1s ease-out;

  /* menu item icon */
  > span:nth-child(1) {
    color: var(--dark-grey);
    font-size: 1.1rem;
    padding-top: 6px;
    justify-self: center;
  }

  /* menu item title */
  > span:nth-child(2) {
    color: var(--navy);
    font-weight: 500;
    margin-right: 10px;
  }

  /* notification count  */
  > span:nth-child(3) {
    justify-self: end;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    background: var(--navy);
    color: #fff;
    border-radius: 100px;
    font-size: 0.5rem;
    width: 20px;
    height: 20px;
  }

  > span:nth-child(3).empty {
    display: none;
  }

  > .color-icon {
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: (--dark-grey);
  }
  > .salmon {
    background: ${colors.salmon} !important;
  }
  > .blue {
    background: ${colors.blue} !important;
  }
  > .orange {
    background: ${colors.orange} !important;
  }

  :hover {
    background: var(--menu-hover);
  }
`;
