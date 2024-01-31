import { Route, Routes } from "react-router-dom";
// import Directory from "./components/directory/Directory";
import Home from "./routes/home";
import Navigation from "./routes/Navigation/Navigation.jsx";
// 
import Authentication from "./routes/auth/authentication/authintication.jsx";

const Shop = () => {
  return <h1>This is shop page </h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
