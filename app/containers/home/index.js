import React from 'react';
import { ScrollView } from 'react-native';
import Header from './header';
import SeasonAnimes from './season-animes';
import YearFilterModal from './season-animes/year-filter-modal';
import TopAiringAnimes from './top-animes';

const Home = () => (
  <ScrollView>
    <Header />
    <TopAiringAnimes />
    <SeasonAnimes />
    <YearFilterModal />
  </ScrollView>
);

export default Home;
