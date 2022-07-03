import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.componentt';

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
    </Routes>
  );
};

export default App;
