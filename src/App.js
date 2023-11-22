import { Nav } from "./routess/navBar/Nav";
import { Home } from "./routess/home/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Shop } from "./routess/Shop";
import { SignIn } from "./routess/sign-in/SignIn";
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Nav/>}/>

    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>

    

  );
};

export default App;
