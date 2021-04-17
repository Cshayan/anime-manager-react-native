import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AnimeManagerScreens from './app/routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AnimeManagerScreens />;
};

export default App;
