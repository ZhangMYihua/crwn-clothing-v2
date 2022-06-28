import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

const App = () => {
  return (
  <Routes>
    <Route path='/' element = {<Home />} />
  </Routes>
)
};

export default App;