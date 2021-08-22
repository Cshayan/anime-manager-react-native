import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { adjust } from './adjust';

const TextComp = (props) => {
  const {
    children,
    size,
    color,
    fontWeight,
    align,
    customStyle,
    ...rest
  } = props;
  return (
    <Text
      style={[
        { fontSize: adjust(size), color, fontWeight, textAlign: align },
        customStyle,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

TextComp.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.any,
  customStyle: PropTypes.object,
  align: PropTypes.string,
};

TextComp.defaultProps = {
  size: 18,
  color: '#111',
  fontWeight: 'normal',
  customStyle: {},
  align: 'center',
};

export default TextComp;
