import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.action';

import { Nav } from './routes/nav/Nav';
import { Home } from './routes/home/Home';
import { Auth } from './routes/auth/Auth';
import { Shop } from './routes/shop/Shop';
import { Checkout } from './routes/checkout/Checkout';

export const App = () => {
  // this dispatch never changes. There is only one dispatch in redux. Don't need to pass into dependency array
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('running effect');
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

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
