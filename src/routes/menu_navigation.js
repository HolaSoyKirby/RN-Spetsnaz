import React from 'react';
import PlatillosPage from '../pages/platillos_page';
import ProfilePage from '../pages/profile_page';
import AlmacenPage from '../pages/almacen_page';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MenuNavigation({navigation, route}) {

    return (
        <Drawer.Navigator initialRouteName="Almacen">
                    <Drawer.Screen name="Almacen" component={AlmacenPage} />
          <Drawer.Screen name="PlatillosPage" component={PlatillosPage} />
          <Drawer.Screen name="ProfilePage" component={ProfilePage} initialParams={route.params}/>
        </Drawer.Navigator>
    );
}