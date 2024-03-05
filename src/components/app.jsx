import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import BottomNavigationPage from './bottom-navigation'
import SearchSuggestions from './searchSuggestions';



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
          </ZMPRouter>
        </SnackbarProvider>
        {/* <BottomNavigationPage /> */}
      </App>
    </RecoilRoot>
  );
}
export default MyApp;