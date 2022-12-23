import Home from './home/home.component.jsx'
 import {Routes, Route, Outlet} from 'react-router-dom'

const App = () => {

  const Navigation = () => {
    return (
    <div>
      <h1> Navigation</h1>
      <Outlet/>
    </div>
    )
  }
  const Shop = () => {
    return (<h1>Shop</h1>)
  }
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={ <Home/>}/>
        <Route path='shop' element={ <Shop/>}/>
      </Route>
    </Routes>
     )

     
 
};

export default App;
// <Categories categories={categories}/>