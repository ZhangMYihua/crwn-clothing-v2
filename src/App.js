const App = () => {
  return (
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
