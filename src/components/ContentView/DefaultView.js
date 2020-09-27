import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const DefaultView = () => {
  return (
    <FlexContainer>
      <p>Select note from the list <strong>or</strong> add new...</p>
      <button>+</button>
    </FlexContainer>
  )
}

export default DefaultView;
