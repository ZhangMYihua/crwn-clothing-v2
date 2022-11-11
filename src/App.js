import {Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import Authintication from "./components/routes/authintication/Authintication.component";
import Shop from "./components/routes/shop/Shop.component";
import CartCheck from "./components/routes/cart/CartCheck.component";


import {useEffect} from 'react';
import { checkUserSession } from "./store/user/user.action";

import {useDispatch} from 'react-redux';



    
    

const App = () => {

  const dispatch = useDispatch();

    
    useEffect ( ()=>{
      dispatch (checkUserSession());
    } ,[]);


  return(
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path ='shop/*' element = {<Shop/>}/>
        <Route path ='auth' element = {<Authintication/>}/>
        <Route path ='cart' element = {<CartCheck/>}/>
      </Route>
    </Routes>
  )  
}

export default App;
