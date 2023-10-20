import { createContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState, AppStateStatus } from "react-native";

enum ThemeType {
  light = "light",
  dark = "dark",
}
const themes = {
  dark: darkTheme,
  light: lightTheme,
};
export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);
  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
