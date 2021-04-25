import React from 'react';
import { ScrollView } from 'react-native';
import Header from './header';
import SeasonAnimes from './season-animes';
import TopAiringAnimes from './top-animes';

const Home = () => (
  <ScrollView>
    <Header />
    <TopAiringAnimes />
    <SeasonAnimes />
  </ScrollView>
);

export default Home;
