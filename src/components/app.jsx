import React from 'react';
import { App, ZMPRouter, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import Layout from './layout';



const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
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