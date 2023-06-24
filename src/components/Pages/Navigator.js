// src/components/Pages/navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Filmes from './CardFilmes';
import Confirmar from './Confirmar';
import CardFilmes from './CardFilmes';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name= "Filmes" component={CardFilmes}/>
        <Stack.Screen name="Confirm" component={Confirmar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}