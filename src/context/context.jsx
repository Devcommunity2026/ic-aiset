// CountContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context object
const CountContext = createContext();

// Create a CountProvider component
export function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isCmtModalOpen, setIsCmtModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Define the context value
  
  // Provide the context value to the children components
  return (
    <CountContext.Provider value={{
      count, setCount, 
      isRegModalOpen, setIsRegModalOpen,
      isCmtModalOpen, setIsCmtModalOpen,
      isBrochureModalOpen, setIsBrochureModalOpen
    }}>
      {children}
    </CountContext.Provider>
  );
}

// Create a custom hook to access the context
export function useCount() {
  return useContext(CountContext);
}

// Create a custom hook to access registration modal state
export function useRegistration() {
  const { 
    isRegModalOpen, setIsRegModalOpen,
    isCmtModalOpen, setIsCmtModalOpen,
    isBrochureModalOpen, setIsBrochureModalOpen
  } = useContext(CountContext);
  return { 
    isRegModalOpen, setIsRegModalOpen,
    isCmtModalOpen, setIsCmtModalOpen,
    isBrochureModalOpen, setIsBrochureModalOpen
  };
}
