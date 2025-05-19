import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize state from localStorage or default to false (light theme)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    textColor: isDarkMode ? '#ffffff' : '#121212',
    navbarBg: isDarkMode ? '#1a1a1a' : '#ffffff',
    navbarText: isDarkMode ? '#ffffff' : '#121212',
    primaryColor: isDarkMode ? '#60a5fa' : '#007bff',
    secondaryColor: isDarkMode ? '#10b981' : '#6c757d',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    cardBg: isDarkMode ? '#1e1e1e' : '#ffffff',
    borderColor: isDarkMode ? '#333333' : '#dee2e6',
    shadowColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    mutedText: isDarkMode ? '#a0a0a0' : '#6c757d',
    linkColor: isDarkMode ? '#60a5fa' : '#007bff',
    linkHoverColor: isDarkMode ? '#93c5fd' : '#0056b3',
    codeBackground: isDarkMode ? '#2d2d2d' : '#f8f9fa',
    success: isDarkMode ? '#00e676' : '#28a745',
    error: isDarkMode ? '#ef4444' : '#dc3545',
    warning: isDarkMode ? '#f59e0b' : '#ffc107'
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
