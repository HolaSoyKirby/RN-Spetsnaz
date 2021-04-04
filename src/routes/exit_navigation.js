import React from 'react';
import LoginPage from '../pages/login_page';
import RegisterPage from '../pages/register_page';
import AgregarIngPage from '../pages/agregar_ing_page';
import ProfilePage from '../pages/profile_page';
import DrawerNavigation from './menu_navigation';
import LoginNavigation from './login_navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ExitNavigation() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
      name = "ProfilePage"
      component={ProfilePage}
      />
      <Stack.Screen name = "LoginNavigation" component = {LoginNavigation}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}