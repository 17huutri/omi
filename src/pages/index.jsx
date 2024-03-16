import React from 'react';
import Categoryv from '../components/categoryV1'
import SearchBar from '../components/search';
import {
  Page
} from 'zmp-ui';
import Recommend from '../components/recommend';
import Banner from '../components/banner';
import ProductList from '../components/product-list';
import Product from '../components/product';
//import SearchProduct from '../components/searchproduct';
//import SearchInStore from '../components/searchv2';
//import generateQRCode from '../components/vnpay';
const HomePage = () => {
  return (
    <Page className="home">
      
      <SearchBar />
      {/* <SearchProduct />
       */}
      <Banner />
      {/* <generateQRCode /> */}
      {/* <SearchInStore /> */}
      <Categoryv />
      <Recommend />
      <Product />
      <ProductList />
    </Page>
  );
}

export default HomePage;