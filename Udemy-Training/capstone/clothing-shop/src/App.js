import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Nav/navigation.component";

import Home from "./Routes/home.component";
import SignIn from "./Routes/sign-in/sign-in.component";

const App = () => {
  const Shop = () => {
    return <h1>I am a shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
