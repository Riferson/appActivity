import React from "react";
import "react-native-gesture-handler";
import { StackRoutes } from "./src/Routes/stack.routes";
import { Container } from "./StyledApp";
import { DataContextProvider } from "./src/Context/DataContext";

import { darkTheme } from "./src/pages/Theme/darkTheme";
import { ThemeProvider } from "./src/pages/Theme/theme";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <DataContextProvider>
          <StackRoutes />
        </DataContextProvider>
      </ThemeProvider>
    </>
  );
}
