import React from 'react';
import LoginPage from '../pages/login_page';
import RegisterPage from '../pages/register_page';
import MenuNavigation from './menu_navigation';
import AgregarPlatPage from '../pages/agregar_plat_page';
import AgregarIngredientePage from '../pages/agregar_ing_page';
import AgregarCantPage from '../pages/agregar_cant_page';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientesPlatilloPage from '../pages/ingredientes_platillo_page';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen name = "LoginPage" component={LoginPage} />
      <Stack.Screen name = "MenuNavigation" component = {MenuNavigation}/>
      <Stack.Screen name = "RegisterPage" component = {RegisterPage}/>
      <Stack.Screen name = "AgregarIngrediente" component = {AgregarIngredientePage}/>
      <Stack.Screen name = "AgregarPlatillo" component = {AgregarPlatPage}/>
      <Stack.Screen name = "IngredientesPlatillo" component = {IngredientesPlatilloPage}/>
      <Stack.Screen name = "AgregarCantidad" component = {AgregarCantPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}