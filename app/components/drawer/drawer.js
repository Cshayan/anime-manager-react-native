import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, Text } from '..';
import { colors } from '../../constants/colors';
import { adjust } from '../text/adjust';
import { images } from './images';

const drawerList = [
  {
    id: 1,
    label: 'My Animes',
    icon: images.dashboard,
  },
  {
    id: 2,
    label: 'Search Animes',
    icon: images.searchInactive,
  },
  {
    id: 3,
    label: 'View Statistics',
    icon: images.stats,
  },
];

const DrawerProfileView = () => (
  <ImageBackground
    style={styles.imgBack}
    resizeMode="cover"
    source={images.loginBack}
  >
    <View style={styles.profileNameContainer}>
      <Text
        align="left"
        size={16}
        color="#fff"
        fontWeight="bold"
        numberOfLines={1}
      >
        Shayan Chatterjee
      </Text>

      <Text align="left" size={12} color="#fff" numberOfLines={1}>
        iamshayan56@gmail.com
      </Text>
      <View style={styles.profileBtnContainer}>
        <TouchableOpacity>
          <Icon
            variant="image"
            name={images.profileRedirectIcon}
            size={adjust(35)}
          />
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);

const Drawer = () => (
  <View style={styles.container}>
    <DrawerProfileView />
    <ScrollView>
      {drawerList.map((ele) => (
        <TouchableOpacity key={ele.id}>
          <View style={styles.listItemContainer}>
            <Icon
              variant="image"
              name={ele.icon}
              size={ele.id === 2 ? adjust(25) : adjust(20)}
            />
            <View style={styles.labelStyle}>
              <Text size={14}>{ele.label}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <View style={styles.logoutContainer}>
      <TouchableOpacity>
        <View style={styles.listItemContainer}>
          <Icon variant="image" name={images.logout} size={adjust(25)} />
          <View style={styles.labelStyle}>
            <Text size={12}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackgroundWhite,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItemContainer: {
    flexDirection: 'row',
    marginVertical: adjust(12),
    marginHorizontal: adjust(10),
  },
  labelStyle: {
    marginLeft: adjust(10),
  },
  logoutContainer: {
    alignSelf: 'flex-start',
    paddingVertical: adjust(15),
  },
  imgBack: {
    width: '100%',
    height: adjust(90),
    backgroundColor: 'red',
  },
  profileNameContainer: {
    paddingVertical: adjust(5),
    paddingHorizontal: adjust(10),
    width: '100%',
  },
  profileBtnContainer: {
    alignSelf: 'flex-end',
  },
});

export default Drawer;
