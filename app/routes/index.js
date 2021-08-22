import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../containers/app';
import Onboard from '../containers/auth';
import AppDrawer from '../components/drawer';
import Login from '../containers/auth/login/login';
import { colors } from '../constants/colors';

const Stack = createStackNavigator();

const AnimeManagerScreens = () => (
  <NavigationContainer
    theme={{
      dark: false,
      colors: {
        background: colors.primaryBackgroundWhite,
        primary: colors.colorBlack,
      },
    }}
  >
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Home" component={AppDrawer} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AnimeManagerScreens;
