import React from 'react';
import { App, ZMPRouter, SnackbarProvider, AnimationRoutes } from 'zmp-ui';
import { RecoilRoot } from 'recoil';

import HomePage from '../pages';
// import BottomNavigationPage from './bottom-navigation'
import SearchSuggestions from './searchSuggestions';

import Layout from './layout';
import { Route } from 'react-router-dom';
import ListProductStore from '../pages/store/listProductStore';




const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
        <SnackbarProvider>
          <ZMPRouter>

            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/searchPage" element={<SearchSuggestions></SearchSuggestions>}></Route>
            </AnimationRoutes>

            <Layout />

          </ZMPRouter>
        </SnackbarProvider>
        {/* <BottomNavigationPage /> */}
      </App>
    </RecoilRoot>
  );
}
export default MyApp;