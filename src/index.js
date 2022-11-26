import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter   } from 'react-router-dom';   

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './components/contexts/user.context';
import { ProductsProvider } from './components/contexts/products.context';
import { CartProvider } from './components/contexts/cart.context';

ReactDOM.render(
  <React.StrictMode>
  {/*
      Nested the application inside of the BrowserRouter component because this extends the 
      ability to read from the URL and keep track of navigation history and all those things
      and respond in turn with it because the Routes and Route components rely on being wrapped
      inside a BrowserRouter component
   */
  }
   <BrowserRouter>
      {/* 
         Wrapping our App around the UserProvider. This means any component nested inside 
         the App component, regardless of how deep inside, can access the context value 
         inside of the provider itself
      */}
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
