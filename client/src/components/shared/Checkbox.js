import React, { useState } from 'react';
import styled from 'styled-components';
import { Check2 } from 'react-bootstrap-icons';

const CheckboxContainer = styled.div``;
const Icon = styled.div`
  transition: all 0.2s ease-in-out;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox ' })`
  border: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 2px solid var(--blue);
  opacity: ${props => (props.checked ? 1 : 0.5)};
  background: ${props => (props.checked ? 'var(--blue)' : 'none')};
  border-radius: 100px;
  transition: border 0.2s ease-out, opacity 0.2s ease-out,
    background 0.2s ease-out, transform 0.2s ease-out;

  svg {
    width: 20px;
    height: 20px;
    margin-top: 6px;
    fill: #fff;
    stroke: #fff;
  }

  ${Icon} {
    opacity: ${props => (props.checked ? 1 : 0)};
  }

  transform: ${props => (props.checked ? 'rotateY(0)' : 'rotateY(180deg)')};

  :hover {
    opacity: 1;
  }
`;

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onClickIsChecked = event => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} readOnly />
      <StyledCheckbox checked={isChecked} onClick={onClickIsChecked}>
        <Icon>
          <Check2 />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
