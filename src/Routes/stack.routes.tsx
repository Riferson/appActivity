import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../pages/Home";
import Galeria from "../pages/Galeria";
import { NavigationContainer } from "@react-navigation/native";
import CameraDefault from "../pages/Camera";
import Contatos from "../pages/Contatos";
import Contato from "../pages/Contato"
import Preferencias from "../pages/Preferencias";
import Cadastros from "../pages/Cadastros";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="galeria" component={Galeria} />
        <Screen name="camera" component={CameraDefault} />
        <Screen name="contatos" component={Contatos} />
        <Screen name="contato" component={Contato} />
        <Screen name="preferencias" component={Preferencias} />
        <Screen name="cadastros" component={Cadastros} />
      </Navigator>
    </NavigationContainer>
  );
}
