import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { adjust } from '../text/adjust';

const Button = (props) => {
  const { label, onPress, disabled, ...rest } = props;
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      onPress={() => onPress()}
      style={[styles.buttonTouch, disabled && styles.disabledTouch]}
    >
      <View>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

const styles = StyleSheet.create({
  buttonTouch: {
    backgroundColor: '#54A0FF',
    width: '100%',
    padding: adjust(10),
    borderRadius: adjust(10),
  },
  labelText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: adjust(14),
  },
  disabledTouch: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: adjust(10),
    borderRadius: adjust(10),
  },
});

export default Button;
