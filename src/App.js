import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/naviagation/navigation.component";
import SingIn from "./routes/sign-in/sign-in.components";
import Home from "./routes/home/routes.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
