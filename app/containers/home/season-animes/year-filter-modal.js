import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Icon, Modal, Button } from '../../../components';
import { adjust } from '../../../components/text/adjust';
import { colors } from '../../../constants/colors';

const YearFilterModal = () => (
  <Modal isVisible coverScreen={false}>
    <View
      style={{
        backgroundColor: 'white',
        padding: adjust(10),
        borderTopLeftRadius: adjust(5),
        borderTopRightRadius: adjust(5),
        height: adjust(100),
      }}
    >
      <Text align="left" size={14} fontWeight="bold">
        Choose year
      </Text>
      <ScrollView>
        <View>
          <Text>2021</Text>
        </View>
        <View>
          <Text>2020</Text>
        </View>
        <View>
          <Text>2019</Text>
        </View>
        <View>
          <Text>2018</Text>
        </View>
        <View>
          <Text>2018</Text>
        </View>
        <View>
          <Text>2018</Text>
        </View>
        <View>
          <Text>2018</Text>
        </View>
      </ScrollView>
    </View>
    <Button label="Done" />
  </Modal>
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

export default YearFilterModal;
