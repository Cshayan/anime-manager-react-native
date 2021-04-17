import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../containers/app';
import Onboard from '../containers/auth';
import AppDrawer from '../components/drawer';

const Stack = createStackNavigator();

const AnimeManagerScreens = () => (
  <NavigationContainer
    theme={{
      colors: {
        background: '#F4F3FA',
        primary: '#111111',
      },
    }}
  >
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Drawer" component={AppDrawer} />
      <Stack.Screen name="Onboard" component={Onboard} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AnimeManagerScreens;
