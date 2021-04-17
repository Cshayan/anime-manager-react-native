import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Button, Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { loginValidationSchema } from './validation-schema';

const LoginForm = () => (
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
          <TextInput
            name="email"
            placeholder="Email"
            style={[
              styles.textInput,
              errors.email && touched.email ? { ...styles.errorInput } : {},
            ]}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && touched.email && (
            <Text align="left" color="red" size={10}>
              {errors.email}
            </Text>
          )}
          <TextInput
            name="password"
            placeholder="Password"
            style={[
              styles.textInput,
              errors.password && touched.password
                ? { ...styles.errorInput }
                : {},
            ]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && touched.password && (
            <Text align="left" color="red" size={10}>
              {errors.password}
            </Text>
          )}
          <View style={{ marginTop: adjust(40) }}>
            <Text size={12}>
              Don't have an account?{' '}
              <Text size={14} fontWeight="bold">
                Register
              </Text>
            </Text>
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

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    paddingVertical: adjust(10),
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
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default LoginForm;
