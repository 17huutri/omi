import React from 'react';
import Coupon from '../components/coupon';
import Navigation from '../components/navigation';
import {
  Page
} from 'zmp-ui';

const Coupon = () => {
  return (
    <Page className="home">
     
      <Coupon/>      
      <Navigation />    
    </Page>
  );
}

export default Coupon;