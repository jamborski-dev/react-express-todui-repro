import styled from "styled-components"

export const TodoDetails = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--dark-grey);

  > span {
    margin-right: 1rem;
  }

  > span > p {
    display: inline;
    padding-left: 5px;
  }

  > span > svg {
    width: auto;
    height: 12px;
    stroke: #747577;
    fill: #747577;
  }
`
