import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { colors } from '../../../constants/colors';
import { topAnimesMock } from './mock-data';
import TopAnimeList from './top-anime-list';

const TopAiringAnimes = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text align="left" size={16}>
        Top animes airing now
      </Text>
      <TouchableOpacity>
        <Text size={12} color={colors.primaryLightBlue}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.animeListContainer}>
      <FlatList
        data={topAnimesMock.slice(0, 6)}
        keyExtractor={(item) => item.mal_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TopAnimeList item={item} index={index} />
        )}
      />
    </View>
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
  animeListContainer: {
    marginTop: adjust(10),
  },
});

export default TopAiringAnimes;
