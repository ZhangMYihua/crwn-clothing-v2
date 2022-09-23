import CategoriesContainer from '../../components/categories-container/CategoriesContainer'

import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Outlet/>
      <CategoriesContainer />
  </div>
  );
};

export default Home;
