import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/sing-in/sing-in.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<h1>teste</h1>}/>
        <Route path="/sing-in" element={<SingIn />}/>
      </Route>   
    </Routes>
  );
};

export default App;
