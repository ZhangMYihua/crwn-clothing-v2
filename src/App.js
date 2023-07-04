import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./Shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path = 'shop/*' element = {<Shop/>}/>
        <Route path= "auth" element = {<Authentication/>}/>
        <Route path = "checkout" element = {<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
