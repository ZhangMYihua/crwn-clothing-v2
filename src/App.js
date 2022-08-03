import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Contact from "./routes/Contact/Contact";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
