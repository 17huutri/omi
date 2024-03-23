import React from 'react';
import { ZMPRouter, App, SnackbarProvider } from 'zmp-ui';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import {
  zmpready
} from 'zmp-framework/react'
import Layout from './layout';
import store from '../store'


const MyApp = () => {
  const zmpparams = {
    name: 'omi',
    theme: 'auto',
    store: store,
  }

  zmpready(() => {
    // Call ZMP APIs here
    store.dispatch('login')
  })

  return (
    <RecoilRoot>
      <App {...zmpparams} >
        <ToastContainer />
        <SnackbarProvider>
          <ZMPRouter>
            <Layout />
          </ZMPRouter>
        </SnackbarProvider>

      </App>
    </RecoilRoot>
  );
}
export default MyApp;