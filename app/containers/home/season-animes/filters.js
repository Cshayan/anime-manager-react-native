import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { colors } from '../../../constants/colors';

const seasonFilterList = [
  {
    id: 1,
    label: 'Winter',
  },
  {
    id: 2,
    label: 'Spring',
  },
  {
    id: 3,
    label: 'Summer',
  },
  {
    id: 4,
    label: 'Fall',
  },
];

const SeasonFilters = () => (
  <View style={styles.filterContainer}>
    <FlatList
      data={seasonFilterList}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity>
          <View
            style={[styles.filterView, index === 0 && styles.selectedFilter]}
          >
            <Text
              size={14}
              style={
                index === 0
                  ? styles.selectedFilterText
                  : styles.unselectedFilterText
              }
            >
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  filterContainer: {
    marginTop: adjust(5),
  },
  filterView: {
    paddingHorizontal: adjust(25),
    paddingVertical: adjust(5),
    backgroundColor: colors.colorWhite,
    marginLeft: adjust(10),
    borderRadius: adjust(5),
    borderWidth: 1,
    borderColor: colors.primaryBorderColor,
  },
  selectedFilter: {
    backgroundColor: colors.primaryLightBlue,
    borderWidth: 1,
    borderColor: colors.primaryLightBlue,
  },
  selectedFilterText: {
    color: colors.colorWhite,
  },
  unselectedFilterText: {
    color: colors.colorBlack,
  },
});

export default SeasonFilters;
