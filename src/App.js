import "./categories.styles.scss";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/Authentication";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>I am Shop</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
