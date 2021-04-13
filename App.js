import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import config from 'react-native-config';

const App = () => (
  <SafeAreaView>
    <Text>Initial setup</Text>
    <Text>{config.API_BASE_URL}</Text>
  </SafeAreaView>
);

export default App;
