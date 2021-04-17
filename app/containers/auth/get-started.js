import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { images } from './images';

const GetStarted = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={images.getStartedImg}
      style={{
        width: '100%',
        height: '60%',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
      }}
    />
    <View
      style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#111' }}>
        Anime Manager
      </Text>
      <Text style={{ fontSize: 16, color: '#111' }}>
        One place to manage all your favourite animes
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: '#54A0FF',
          width: '70%',
          padding: 15,
          borderRadius: 15,
        }}
      >
        <View>
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>
            Get Started
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default GetStarted;
