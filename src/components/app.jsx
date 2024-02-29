import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import LandingPage from '../pages/landingPage';



const MyApp = () => {
  return (


      <RecoilRoot>
        <App >
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                  <Route path="/home" element={<HomePage/>} />
                  <Route path="/" element={<LandingPage/>} />
                
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </RecoilRoot>

  );
}
export default MyApp;