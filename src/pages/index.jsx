import React from 'react';
import Categoryv from '../components/categoryV1'
import SearchBar from '../components/search';
import {
  Page
} from 'zmp-ui';
import Recommend from '../components/recommend';
import Banner from '../components/banner';
import ProductList from '../components/product-list';


import Store from '../components/stores';



const HomePage = () => {
  return (
    <Page className="home">
      <SearchBar />


      <Banner />
      {/* <generateQRCode /> */}
      {/* <SearchInStore /> */}
      <Store />

      <Categoryv />
      <Recommend />
      <ProductList />

    </Page>
  );
}

export default HomePage;