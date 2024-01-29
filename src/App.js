import { Outlet, Route, Routes } from "react-router-dom";
// import Directory from "./components/directory/Directory";
import Home from "./routes/home";

const Navigation = () => {
  return (
    <>
      <div>
        <h1>This is navigation bar </h1>
      </div>
      <Outlet />
    </>
  );
};

const Shop = () => {
  return <h1>This is shop page </h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
