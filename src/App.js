import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from '../src/routes/shop/shop.component'
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
  <Routes>
    <Route path='/' element= {<Navigation />} >
     <Route index element = {<Home />} />L
     <Route path = 'shop' element= {<Shop />} />L
     <Route path ='auth' element = {<Authentication />} />
     <Route path ='checkout' element = {<Checkout />} />
    </Route>
  </Routes>
)
};

export default App;