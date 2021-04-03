import LoginNavigation from './login_navigation';
import MenuNavigation from './menu_navigation';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

const MainNavigation = createSwitchNavigator({
    Login: LoginNavigation,
    Menu: MenuNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  });