import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Button, Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { loginValidationSchema } from './validation-schema';
import { images } from '../images';

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <KeyboardAwareScrollView
          contentContainerStyle={{}}
          keyboardShouldPersistTaps="always"
        >
          <ScrollView>
            <View
              style={[
                styles.textInput,
                errors.email && touched.email ? { ...styles.errorInput } : {},
              ]}
            >
              <TextInput
                name="email"
                placeholder="Email"
                style={[{ flex: 1 }]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <Image source={images.emailIcon} style={styles.iconStyle} />
            </View>
            {errors.email && touched.email && (
              <Text align="left" color="red" size={10}>
                {errors.email}
              </Text>
            )}
            <View
              style={[
                styles.textInput,
                errors.password && touched.password
                  ? { ...styles.errorInput }
                  : {},
              ]}
            >
              <TextInput
                name="password"
                placeholder="Password"
                style={[{ flex: 1 }]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              <Image source={images.passwordIcon} style={styles.iconStyle} />
            </View>
            {errors.password && touched.password && (
              <Text align="left" color="red" size={10}>
                {errors.password}
              </Text>
            )}
            <View style={{ marginTop: adjust(40) }}>
              <View
                style={{
                  marginBottom: adjust(5),
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text size={12}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text size={14} fontWeight="bold" color="blue">
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
              <Button
                disabled={!(values.email && values.password) || !isValid}
                onPress={handleSubmit}
                label="Submit"
              />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    paddingVertical: adjust(3),
    paddingHorizontal: adjust(15),
    backgroundColor: '#fff',
    marginVertical: adjust(10),
    borderRadius: adjust(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#111',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorInput: {
    borderColor: 'red',
  },
  iconStyle: {
    height: adjust(20),
    width: adjust(17),
  },
});

export default LoginForm;
