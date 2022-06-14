import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component";

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
