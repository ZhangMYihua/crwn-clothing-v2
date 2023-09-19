import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/';
import Navigation from './routes/navigation/';
import Authentication from './routes/authentication/';

const Shop = () => {
  return <h1>I` am the shop page</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
