import React from 'react';
import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native';
import { Text, Icon } from '../../../components';
import { colors } from '../../../constants/colors';

const YearFilterCTA = () => (
  <View>
    <TouchableOpacity>
      <View style={styles.ctaContainer}>
        <Text size={12} color={colors.primaryLightBlue} fontWeight="bold">
          2021
        </Text>
        <Icon variant="AntDesign" name="down" color={colors.primaryLightBlue} />
      </View>
      <View style={styles.bottomDash} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  ctaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomDash: {
    borderWidth: 0.5,
    width: '100%',
    borderBottomColor: colors.primaryLightBlue,
  },
});

export default YearFilterCTA;
