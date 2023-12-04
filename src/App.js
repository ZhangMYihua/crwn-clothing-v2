import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import NavigationBar from './components/navigation-bar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true}  element={<Home />} />
        <Route path='shop' element={<h1>Shop</h1>} />
      </Route>
 
    </Routes>
  );
};

export default App;
