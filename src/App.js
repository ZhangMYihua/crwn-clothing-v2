// import React from 'react'
import Home from './routes/home/home.compnent'
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return (
    <h1> im am an the shop component</h1>
  )
}


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        < Route path='shop' element={<Shop />} />
        < Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}
export default App;
