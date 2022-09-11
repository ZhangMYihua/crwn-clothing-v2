import {Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation.component";


const Shop = ()=>{
  return(
    <div>
      <h1>this is the shop</h1>
    </div>
  )
};

const App = () => {
return(
  <Routes>
    <Route path='/' element = {<Navigation/>}>
      <Route index element = {<Home/>}/>
      <Route path ='shop' element = {<Shop/>}/>
    </Route>
  </Routes>
)  
}

export default App;
