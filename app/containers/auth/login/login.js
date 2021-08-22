import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { images } from '../images';
import LoginForm from './login-form';

const Login = () => (
  <ScrollView style={{ flex: 1 }}>
    <ImageBackground
      source={images.loginImg}
      style={styles.imgBack}
      resizeMode="cover"
    >
      <ScrollView style={styles.viewContainer}>
        <ScrollView style={styles.formView}>
          <Text align="left" size={26} fontWeight="bold">
            Let's sign you in.
          </Text>
          <Text align="left" size={14}>
            Welcome back.
          </Text>
          <LoginForm />
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  </ScrollView>
);

const styles = StyleSheet.create({
  imgBack: {
    width: '100%',
    height: '100%',
  },
  viewContainer: {
    backgroundColor: '#F4F3FA',
    marginTop: adjust(200),
    borderTopLeftRadius: adjust(35),
    borderTopRightRadius: adjust(35),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
  },
  formView: {
    paddingVertical: adjust(10),
    paddingHorizontal: adjust(15),
  },
});

export default Login;
