import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './components/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

export const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} /> 
        <Route path='shop' element={<Shop />} /> 
        <Route path='sign' element={<SignIn />} /> 
      </Route>
    </Routes>
  );
};

export default App;
