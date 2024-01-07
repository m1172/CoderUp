import React, { useState, createContext } from 'react';

export const MainContext = createContext();

const Context = ({ children }) => {
  const [onLoginPage, setOnLoginPage] = useState(false);

  return (
    <MainContext.Provider
      value={{
        onLoginPage,
        setOnLoginPage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
