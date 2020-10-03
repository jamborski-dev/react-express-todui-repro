import React, { createContext, useState } from 'react';

export const DropdownContext = createContext(null);

export const DropdownProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <DropdownContext.Provider
      value={{}}
    >
      {children}
    </DropdownContext.Provider>
  );
};
