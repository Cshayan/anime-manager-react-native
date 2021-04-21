import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBottomTabs from './bottom-tabs';
import Home from '../../containers/home';
import SearchAnime from '../../containers/search-anime';
import MyAnime from '../../containers/my-anime';
import { images } from './images';

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const BottomTabs = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBar={(props) => <MyBottomTabs {...props} />}
    sceneContainerStyle={{
      marginBottom: 100,
    }}
  >
    <Tabs.Screen
      name="Home"
      component={Home}
      initialParams={{ id: 1, icon: images.home, iconActive: images.home }}
    />
    <Tabs.Screen
      name="SearchAnime"
      component={SearchAnime}
      initialParams={{
        id: 2,
        icon: images.searchInactive,
        iconActive: images.searchActive,
      }}
    />
    <Tabs.Screen
      name="MyAnime"
      component={MyAnime}
      initialParams={{
        id: 3,
        icon: images.dashboard,
        iconActive: images.dashboard,
      }}
    />
  </Tabs.Navigator>
);

const AppDrawer = () => (
  <Drawer.Navigator
    initialRouteName="BottomTabs"
    drawerContent={(props) => <View {...props}></View>}
    drawerPosition="left"
    overlayColor="rgba(0, 0, 0, 0.7)"
  >
    <Drawer.Screen name="BottomTabs" component={BottomTabs} />
  </Drawer.Navigator>
);

export default AppDrawer;
