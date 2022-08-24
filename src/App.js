
import Home from './routes/home/home.component';
import {Routes,Route} from "react-router-dom"
import Navigation from './routes/navigation.component.jsx/navigation.component';
import SingIn from './routes/sign-in/sign-in.component';
const Shop =()=>{
  return(<div>shop</div>)
}


const App = () => {
  
  return (
    <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="sign-in" element={<SingIn/>}/>
    </Route>
    </Routes>
      
  );
};

export default App;