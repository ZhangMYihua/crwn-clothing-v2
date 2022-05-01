import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
