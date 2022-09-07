import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Authentication from "./routes/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="shop"
          element={() => {
            return <p>Shop</p>;
          }}
        />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
