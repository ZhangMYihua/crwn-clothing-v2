import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
