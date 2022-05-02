import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { useDispatch } from 'react-redux';

import { checkUserSession } from './store/user/user.action';

import NavBar from "./routes/navbar-item/navbar-item.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;