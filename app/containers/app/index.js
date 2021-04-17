import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const App = (props) => {
  useEffect(() => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Onboard',
        },
      ],
    });
    props?.navigation?.dispatch(resetAction);
  }, [props]);

  return <View />;
};

App.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default App;
