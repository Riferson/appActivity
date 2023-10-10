import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import Galeria from '../pages/Galeria';
import {NavigationContainer} from '@react-navigation/native'
import CameraDefault from '../pages/Camera';


const {Screen,Navigator} = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
        <Navigator  screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="galeria" component={Galeria} />
            <Screen name="camera" component={CameraDefault} />
        </Navigator>
    </NavigationContainer>
  );
}