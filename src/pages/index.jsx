import React from 'react';
import Categoryv from '../components/categoryV1'
import SearchBar from '../components/search';
import Coupon from '../components/coupon';
import {
  Page
} from 'zmp-ui';
import Recommend from '../components/recommend';
import Banner from '../components/banner';
import Navigation from '../components/navigation';

const HomePage = () => {
  return (
    <Page className="home">
      <SearchBar />
      <Coupon/>
      <Banner />
      <Categoryv />
      <Recommend />
      
      <Navigation />
     
    </Page>
  );
}

export default HomePage;