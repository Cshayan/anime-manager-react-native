import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { adjust } from '../../../components/text/adjust';

const TopAnimeList = ({ index, item }) => (
  <TouchableOpacity>
    <View style={styles.shadowCard}>
      <Image
        resizeMode="cover"
        source={{ uri: item.image_url }}
        style={[styles.imageStyle(index)]}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imageStyle: (index) => ({
    width: adjust(100),
    height: adjust(150),
    marginLeft: index !== 0 ? adjust(15) : 0,
    borderRadius: adjust(5),
  }),
  shadowCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

TopAnimeList.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};

export default TopAnimeList;
