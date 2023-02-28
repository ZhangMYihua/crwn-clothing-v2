import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {UserProvider} from './components/contexts/user.context';
import {ProductsProvider} from './components/contexts/products.context';
import {CartProvider} from './components/contexts/cart.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
