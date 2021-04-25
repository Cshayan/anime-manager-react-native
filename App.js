import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AnimeManagerScreens from './app/routes';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AnimeManagerScreens />;
};

export default App;
