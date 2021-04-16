import React from 'react';
import PlatillosPage from '../pages/platillos_page';
import ProfilePage from '../pages/profile_page';
import AlmacenPage from '../pages/almacen_page';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MenuNavigation() {
    return (
        <Drawer.Navigator initialRouteName="PlatillosPage">
          <Drawer.Screen name="PlatillosPage" component={PlatillosPage} />
          <Drawer.Screen name="Almacen" component={AlmacenPage} />
          <Drawer.Screen name="ProfilePage" component={ProfilePage} />
        </Drawer.Navigator>
    );
}