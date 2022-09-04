import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";

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
      </Route>
    </Routes>
  );
};

export default App;
