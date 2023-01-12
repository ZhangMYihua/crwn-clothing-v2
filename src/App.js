import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import SigIn from "./routes/sign-in/sign-in";
const Shope = () => {
  return <h1>Halllo i am a Shope</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shope" element={<Shope />} />
        <Route path="signIn" element={<SigIn />} />
      </Route>
    </Routes>
  );
};

export default App;
