import React, { createContext, useState } from 'react';
export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }
    
  return (
    <ModalContext.Provider
      value={{
        isModal,
        openModal,
        closeModal}}
    >
      {children}
    </ModalContext.Provider>
  );
};
