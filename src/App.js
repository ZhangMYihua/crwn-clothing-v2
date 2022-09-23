import { Routes, Route } from 'react-router-dom';
import Nav from './routes/nav/Nav';
import Home from './routes/home/Home';
import SignIn from './routes/sign-in/SignIn';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
