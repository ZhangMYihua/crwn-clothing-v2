import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import SignIn from "./routes/signin";

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
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
