import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils';

import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';

const entryPoint = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  entryPoint
);
