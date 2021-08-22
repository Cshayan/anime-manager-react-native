import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { adjust } from '../text/adjust';

const BottomTabs = (props) => {
  const { state: { routes = [], index } = {}, navigation } = props;

  const allTabs = routes?.map((route, i) => (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      key={route.params.id}
    >
      <TouchableOpacity
        style={[styles.iconTouch, i === 1 && styles.middleIconTouch]}
        onPress={() => navigation.navigate(route.name)}
      >
        <Image
          source={index === i ? route.params.iconActive : route.params.icon}
          style={[
            {
              width: adjust(i === 1 ? 55 : 25),
              height: adjust(i === 1 ? 55 : 25),
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  ));

  return (
    <View style={styles.bottomTabContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SearchAnime')}
      >
        <View style={styles.centerAlign}></View>
      </TouchableWithoutFeedback>
      <View style={styles.allTabsView}>{allTabs}</View>
    </View>
  );
};

BottomTabs.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    height: adjust(60),
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  allTabsView: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { height: 10, width: 10 },
  },
  middleIconTouch: {
    position: 'absolute',
    bottom: 0,
  },
  iconTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: adjust(7),
  },
  centerAlign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default BottomTabs;
