import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Nav from './routes/navigation/nav.component';
import SignIn from './routes/sign-in/sign-In.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
