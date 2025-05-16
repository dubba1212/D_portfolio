import React, { createContext, useState } from 'react';
import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const initialTheme = themeData.theme;
  const [theme, setTheme] = useState(initialTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const toggleTheme = () => {
    // Example logic to toggle between 'light' and 'dark' themes
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const contextValue = {
    theme,
    drawerOpen,
    toggleDrawer,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
