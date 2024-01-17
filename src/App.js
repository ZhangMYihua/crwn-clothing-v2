import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import NavigationBar from './components/navigation-bar';
import SignupFrom from './components/signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true}  element={<Home />} />
        <Route path='shop' element={<h1>Shop</h1>} />
        <Route path='signup' element={<SignupFrom />} />
      </Route>
 
    </Routes>
  );
};

export default App;
