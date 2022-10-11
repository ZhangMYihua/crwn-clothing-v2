import { Outlet } from 'react-router-dom';
import { CategoriesContainer } from '../../components/categories-container/CategoriesContainer'

export const Home = () => {
  return (
    <div>
      <CategoriesContainer/>
       <Outlet />

  </div>
  );
};


