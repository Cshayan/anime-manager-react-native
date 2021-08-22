import React from 'react';
import PropTypes from 'prop-types';
import { Image, ViewPropTypes } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  imageIcon,
  antDesign,
  entypo,
  evil,
  feather,
  fontawesome,
  fontawesome5,
  ionIcons,
  material,
  materialCommunity,
  octIcons,
  simpleLineIcons,
} from './icon-variant';

const CustomIcon = (props) => {
  const {
    variant,
    size,
    name,
    style,
    disabled,
    testID,
    accessibilityLabel,
  } = props;

  const otherProps = { style, disabled, testID, accessibilityLabel };

  switch (variant) {
    case imageIcon: {
      return (
        <Image
          {...otherProps}
          source={name}
          style={[{ width: size, height: size }, { ...style }]}
          resizeMode="contain"
        />
      );
    }
    case antDesign: {
      return <AntDesign {...props} />;
    }
    case entypo: {
      return <Entypo {...props} />;
    }
    case evil: {
      return <EvilIcons {...props} />;
    }
    case feather: {
      return <Feather {...props} />;
    }
    case fontawesome: {
      return <FontAwesomeIcon {...props} />;
    }
    case fontawesome5: {
      return <FontAwesomeIcon5 {...props} />;
    }
    case ionIcons: {
      return <Ionicons {...props} />;
    }
    case material: {
      return <MaterialIcon {...props} />;
    }
    case materialCommunity: {
      return <MaterialCommunityIcons {...props} />;
    }
    case octIcons: {
      return <Octicons {...props} />;
    }
    case simpleLineIcons: {
      return <SimpleLineIcons {...props} />;
    }
    default: {
      return <AntDesign {...props} />;
    }
  }
};

CustomIcon.defaultProps = {
  variant: antDesign,
  size: 18,
  name: 'ellipsis1',
  color: '#aaa',
  style: {},
  image: '',
  height: '30',
  width: '30',
  disabled: false,
  testID: 'components-icon-index-100',
  accessibilityLabel: 'components-icon-index-100',
};

CustomIcon.propTypes = {
  variant: PropTypes.oneOf([
    imageIcon,
    antDesign,
    entypo,
    evil,
    feather,
    fontawesome,
    fontawesome5,
    ionIcons,
    material,
    materialCommunity,
    octIcons,
    simpleLineIcons,
  ]).isRequired,
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  style: ViewPropTypes.style,
  image: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  testID: PropTypes.any,
  accessibilityLabel: PropTypes.any,
};

export default CustomIcon;
