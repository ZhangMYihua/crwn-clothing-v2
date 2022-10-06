import { Routes, Route } from 'react-router-dom';
import { Nav } from './routes/nav/Nav';
import { Home } from './routes/home/Home';
import { Auth } from './routes/auth/Auth';
import { Shop } from './routes/shop/Shop';
import { Checkout } from './routes/checkout/Checkout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
