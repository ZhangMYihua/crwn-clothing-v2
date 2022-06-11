import { Route, Routes } from "react-router-dom";
import CheckOut from "./components/checkout/checkout.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Shop from "./components/routes/shop/shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
