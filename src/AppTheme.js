// AppTheme.js

import React, { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
const AppTheme = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={`app ${theme}`}>
      {children}
    </div>
  </ThemeContext.Provider>
);
};

export default AppTheme;
