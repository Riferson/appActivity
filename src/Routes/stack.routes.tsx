import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../pages/Home";
import Galeria from "../pages/Galeria";
import { NavigationContainer } from "@react-navigation/native";
import CameraDefault from "../pages/Camera";
import Contatos from "../pages/Contatos";
import Preferencias from "../pages/Preferencias";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="galeria" component={Galeria} />
        <Screen name="camera" component={CameraDefault} />
        <Screen name="contatos" component={Contatos} />
        <Screen name="preferencias" component={Preferencias} />
      </Navigator>
    </NavigationContainer>
  );
}
