import { Routes, Route } from 'react-router-dom';
import Nav from './routes/nav/Nav';
import Home from './routes/home/Home';
import Authentication from './routes/authentication/authentication';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
