import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { ModalOverlay, ModalContainer, ModalHeader, ModalContent } from './Modal.styles';
import Button from '../shared/Button';
import { Plus } from 'react-bootstrap-icons';

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
