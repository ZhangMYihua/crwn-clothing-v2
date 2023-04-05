import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
import { CartProvider } from './context/cart.context';
import { UserProvider} from './context/user.context';
import { ProductsProvider } from './context/products.context';

import './index.scss';

ReactDOM.render(
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
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
