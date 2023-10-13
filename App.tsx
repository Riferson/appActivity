import React from 'react';
import 'react-native-gesture-handler';
import { StackRoutes } from './src/Routes/stack.routes';
import { Container } from './StyledApp';
import { DataContextProvider } from './src/Context/DataContext';


export default function App() {
  return (
    <>
    <DataContextProvider>
      <StackRoutes/>
    </DataContextProvider>
    </>
    
  );
}
