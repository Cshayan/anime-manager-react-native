import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { adjust } from '../text/adjust';
import { colors } from '../../constants/colors';

const Button = (props) => {
  const { label, onPress, disabled, isLoading, ...rest } = props;
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled || isLoading}
      onPress={() => onPress()}
      style={[
        styles.buttonTouch,
        (disabled || isLoading) && styles.disabledTouch,
      ]}
    >
      {!isLoading ? (
        <View>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.labelText}>Loading...</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
};

const styles = StyleSheet.create({
  buttonTouch: {
    backgroundColor: colors.primaryLightBlue,
    width: '100%',
    padding: adjust(10),
    borderRadius: adjust(10),
  },
  labelText: {
    textAlign: 'center',
    color: colors.colorWhite,
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
