import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { adjust } from '../../../components/text/adjust';
import { colors } from '../../../constants/colors';
import { seasonAnimesMockFinalData } from './mock-data';

const SeasonAnimesSwiper = () => (
  <View>
    <SwiperFlatList
      showPagination
      autoplay
      autoplayLoop
      autoplayDelay={4}
      paginationActiveColor={colors.primaryLightBlue}
      paginationDefaultColor={colors.colorLightGrey}
      paginationStyleItemInactive={{ width: adjust(7), height: adjust(7) }}
    >
      {seasonAnimesMockFinalData?.map((item) => (
        <View style={styles.imageView}>
          {item.seasonData.map((e) => (
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                source={{
                  uri: e?.image_url,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </SwiperFlatList>
  </View>
);

const styles = StyleSheet.create({
  imageView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: adjust(280),
    justifyContent: 'center',
    height: adjust(280),
  },
  image: {
    width: adjust(110),
    height: adjust(110),
    margin: adjust(10),
    borderRadius: adjust(5),
  },
});

export default SeasonAnimesSwiper;
