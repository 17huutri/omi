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
import CustomerInfo from '../components/customer';

const HomePage = () => {
  return (
    <Page className="home">
      
      <SearchBar />
      <Banner />
      <Categoryv />
      <Recommend />
      <Product />
      <ProductList />
      <CustomerInfo />
       
    </Page>
  );
}

export default HomePage;