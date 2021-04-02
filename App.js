import React from 'react';
import { View } from 'react-native';
import LoginForm from './src/pages/login_form';
import RegisterForm from './src/pages/register_form';
import AgregarIng from './src/pages/agregar_ing';
import ProfilePage from './src/pages/profile_page';

export default function App() {
  return (
    <View>
      <LoginForm/>
    </View>
  );
}