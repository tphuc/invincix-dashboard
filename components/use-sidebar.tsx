'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context to hold the state
const ExpendableSidebarContext = createContext<{isOpen: any, toggleSidebar: any}>({
    isOpen: true,
    toggleSidebar: null
});

// Create a provider to wrap your app with
export const ExpendableSidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <ExpendableSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </ExpendableSidebarContext.Provider>
  );
};

// Create a hook to use the context in components
export const useExpendableSidebar = () => {
  const context = useContext(ExpendableSidebarContext);
  if (!context) {
    throw new Error('useExpendableSidebar must be used within an ExpendableSidebarProvider');
  }
  return context;
};



