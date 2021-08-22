import React from 'react';
import PropTypes from 'prop-types';
import RNModal from 'react-native-modal';

const Modal = (props) => {
  const {
    children,
    coverScreen,
    isVisible,
    onModalOutsideClick,
    ...rest
  } = props;
  return (
    <RNModal
      coverScreen={false}
      isVisible={isVisible}
      backdropOpacity={0.2}
      onBackdropPress={onModalOutsideClick}
      onBackButtonPress={onModalOutsideClick}
      {...rest}
    >
      {children}
    </RNModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  coverScreen: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  onModalOutsideClick: PropTypes.func,
};

Modal.defaultProps = {
  coverScreen: false,
  onModalOutsideClick: () => {},
};

export default Modal;
