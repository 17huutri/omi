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



const HomePage = () => {
  return (
    <Page className="home">
      <SearchBar />
      
      <Banner />
      <Categoryv />
      <Recommend />
      <Product />
      <ProductList />
    </Page>
  );
}

export default HomePage;