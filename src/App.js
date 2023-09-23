import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/';
import Navigation from './routes/navigation/';
import Authentication from './routes/authentication/';
import Shop from './routes/shop/';
import Checkout from './routes/checkout/';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
