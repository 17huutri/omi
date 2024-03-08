import React from 'react';
import Categoryv from '../components/categoryV1'
import SearchBar from '../components/search';
import Coupon from '../components/coupon';
import {
  Page
} from 'zmp-ui';
import Recommend from '../components/recommend';
import Banner from '../components/banner';
import Store from '../components/stores';


const HomePage = () => {
  return (
    <Page className="home">
      <SearchBar />
      <Coupon />
      <Banner />
      <Store />
      <Categoryv />
      <Recommend />

    </Page>
  );
}

export default HomePage;