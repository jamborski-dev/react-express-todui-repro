import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import { Plus } from 'react-bootstrap-icons';
import { ModalContext } from '../../context/ModalContext';

const ModalOverlay = styled.div`
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

const ModalContainer = styled.div`
  /* display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center; */
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background: #fff;
  width: 100%;
  height: 100%;
`;

const ModalHeader = styled.header`
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

const ModalContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Modal = () => {
  const { isModal, closeModal } = useContext(ModalContext);

  return (
    <>
      {!isModal ? null : (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <h2>Hello from modal</h2>

              <Button
                iconSize="1.2rem"
                position="right"
                onClick={() => closeModal()}
              >
                <Plus />
              </Button>
            </ModalHeader>
            <ModalContent>
              <div>modal menu</div>
              <div>modal content</div>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
