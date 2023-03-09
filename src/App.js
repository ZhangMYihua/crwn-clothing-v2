import { Routes,Route,Outlet } from 'react-router-dom';
import Navegation from './routes/navegation/navegation.component.jsx';
import Home from './routes/home/home.component.jsx';
import SingIn from './routes/sing-in/sing-in.component.jsx'





const App = () => {
  
 return (

  <Routes>

   <Route path='/' element={<Navegation/>}>
    <Route index={true} element={<Home/>} />
    <Route path='/shop' element ={<h1>Hello Shop</h1>}/>
    <Route path='/sing-in' element ={<SingIn/>}/>
   </Route>
   

  </Routes>
 
 
 );
};

export default App;
