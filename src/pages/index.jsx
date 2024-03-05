import React from 'react';
import Categoryv from '../components/categoryV1'
import SearchBar from '../components/search';
import Coupon from '../components/coupon';
import {
  Page
} from 'zmp-ui';
import Recommend from '../components/recommend';
import Banner from '../components/banner';

const HomePage = () => {
  return (
    <Page className="home">
      <SearchBar />
      <Coupon />
      <Banner />
      <Categoryv />
      <Recommend />

    </Page>
  );
}

export default HomePage;