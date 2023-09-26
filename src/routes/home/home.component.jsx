import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/';

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};
