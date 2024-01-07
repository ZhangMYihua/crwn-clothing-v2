import { Outlet } from "react-router";
import Directory from "../../components/directory/directory.component";

const Home = () => {
 
  return (
    <div>
      <Directory/>
      <Outlet />
    </div>
  )
  
};

export default Home;