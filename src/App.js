import {Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import Authintication from "./components/routes/authintication/Authintication.component";
import Shop from "./components/routes/shop/Shop.component";
import CartCheck from "./components/routes/cart/CartCheck.component";


const App = () => {
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
