import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Button, Text } from '../../components';
import { adjust } from '../../components/text/adjust';
import { images } from './images';

const GetStarted = (props) => {
  const { navigation } = props;
  const handleGetStartedPress = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        },
      ],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={images.getStartedImg} style={styles.imgCover} />
      <View style={styles.container}>
        <Text size={26} fontWeight="bold">
          Anime Manager
        </Text>
        <Text size={14}>One place to manage all your favourite animes</Text>
        <View style={styles.btnContainer}>
          <Button label="Get Started" onPress={() => handleGetStartedPress()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgCover: {
    width: '100%',
    height: '60%',
    borderBottomLeftRadius: adjust(55),
    borderBottomRightRadius: adjust(55),
  },
  container: {
    marginTop: adjust(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: adjust(5),
  },
  btnContainer: {
    marginTop: adjust(40),
    width: '90%',
  },
});

GetStarted.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default GetStarted;
