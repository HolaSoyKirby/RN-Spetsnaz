import React from 'react';
import { View } from 'react-native';
import LoginPage from '../pages/login_page';
import RegisterPage from '../pages/register_page';
import AgregarIngPage from '../pages/agregar_ing_page';
import ProfilePage from '../pages/profile_page';
import DrawerNavigation from './menu_navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
      name = "LoginPage"
      component={LoginPage}
      />
      <Stack.Screen name = "DrawerNavigation" component = {DrawerNavigation}/>
      <Stack.Screen name = "RegisterPage" component = {RegisterPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}