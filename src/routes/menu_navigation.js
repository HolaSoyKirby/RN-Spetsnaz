import React from 'react';
import PlatillosPage from '../pages/platillos_page';
import ProfilePage from '../pages/profile_page';
import ExitNavigation from './exit_navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="PlatillosPage">
          <Drawer.Screen name="PlatillosPage" component={PlatillosPage} />
          <Drawer.Screen name="ExitNavigation" component={ExitNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}