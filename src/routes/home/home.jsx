import Directory from "../.././components/directory/directory";
import { Outlet } from "react-router-dom";



const  Home = () => {

  
  
  return ( 
    <div>
    <Outlet/>
    <Directory    />
    </div> 
  )
};

export default Home;