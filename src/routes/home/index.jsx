
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory';
import categories from '../../categories.json'


const Home = () => {
  return (
    <>
    <Outlet />
    <Directory categories={categories}/>
    </>
 
  );
};

export default Home;
