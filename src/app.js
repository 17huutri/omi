// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

import ZMP from 'zmp-framework/core/lite-bundle'

// Import ZMP-React Plugin
import ZMPReact from 'zmp-framework/react'
// Import tailwind styles
import './css/tailwind.css';

import 'zmp-ui/zaui.css';

import './css/app.scss';

// Import App Component
import App from './components/app';
import appConfig from '../app-config.json';

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}
ZMP.use(ZMPReact)


// Mount React App
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));