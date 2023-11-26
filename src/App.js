import { Nav } from "./routess/navBar/Nav";
import { Home } from "./routess/home/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Shop } from "./routess/shop/Shop";
import { Auth } from "./routess/authentication/Auth";
import { CheckOutPage } from "./routess/checkOutPage/CheckOutPage";
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Nav/>}/>

    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/checkout" element={<CheckOutPage/>}/>
    </Routes>
    </BrowserRouter>

    

  );
};

export default App;