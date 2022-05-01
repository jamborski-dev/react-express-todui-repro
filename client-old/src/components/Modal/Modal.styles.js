import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem;
`;

export const ModalContainer = styled.div`
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background: #fff;
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;

  > h2 {
    margin: 0;
  }

  > button > svg {
    transform: rotate(45deg);
  }
`;

export const ModalContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;