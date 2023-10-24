import React,{ createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};


const ThemesContext = createContext <ThemeContextType | null>(null);

export function ThemeProvider({ children }:any) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function getStoredTheme() {
       const temaSalvo = await AsyncStorage.getItem('themeDark');
      if (temaSalvo) setTheme(JSON.parse(temaSalvo))
    }

    getStoredTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemesContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}