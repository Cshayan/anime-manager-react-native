import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import SeasonFilters from './filters';
import SeasonAnimesSwiper from './season-animes-swiper';

const SeasonAnimes = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text align="left" size={16}>
        View animes by season
      </Text>
    </View>
    <SeasonFilters />
    <SeasonAnimesSwiper />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: adjust(8),
    marginTop: adjust(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SeasonAnimes;
