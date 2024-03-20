import React from 'react';
import { ZMPRouter, App, SnackbarProvider } from 'zmp-ui';

import { RecoilRoot } from 'recoil';
import {
  zmpready
} from 'zmp-framework/react'
import Layout from './layout';
import store from '../store'

// import BottomNavigationPage from './bottom-navigation'
import SearchSuggestions from './searchSuggestions';

import { Route } from 'react-router-dom';




const MyApp = () => {
  const zmpparams = {
    name: 'omi',
    theme: 'auto',
    store: store,
  }

  // zmpready(() => {
  //   // Call ZMP APIs here
  //   store.dispatch('login')
  // })

  return (
    <RecoilRoot>
      <App {...zmpparams} >
        <SnackbarProvider>
          <ZMPRouter>
            <Layout />
          </ZMPRouter>
        </SnackbarProvider>

        {/* <BottomNavigationPage /> */}
      </App>
    </RecoilRoot>
  );
}
export default MyApp;