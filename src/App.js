import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/navbar-item/navbar-item.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;