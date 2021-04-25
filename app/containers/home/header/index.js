import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { adjust } from '../../../components/text/adjust';
import { Icon } from '../../../components';
import { images } from '../images';

const Header = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOpenDrawer()}>
        <Icon variant="image" name={images.hamburger} size={adjust(20)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon variant="image" name={images.userIcon} size={adjust(30)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: adjust(40),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: adjust(5),
    marginTop: adjust(7),
    paddingHorizontal: adjust(10),
  },
});

export default Header;
