
import Home from './routes/home/home.component';
import {Routes,Route} from "react-router-dom"
import Navigation from './routes/navigation.component.jsx/navigation.component';
import Authentication from './routes/authentication/authentication-in.component';
import Shop from "./routes/shop/shop.component.jsx"
import Checkout from "./routes/checkout/checkout.component.jsx"
const App = () => {
  
  return (
    <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    </Route>
    </Routes>
      
  );
};

export default App;