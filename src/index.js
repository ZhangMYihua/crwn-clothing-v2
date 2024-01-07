import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';


ReactDOM.render(
 <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
 </React.StrictMode>,
 document.getElementById('root')
);

reportWebVitals();