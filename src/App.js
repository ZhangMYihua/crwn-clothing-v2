import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
