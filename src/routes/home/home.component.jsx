// Outlet allows us to specific exactly where where want react router DOM to render nested matching elements
// defined in Routes/Route (in app.js)
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
      <div>
         {
            /*  
               Wherever you place the <Outlet /> is where whenever the route matches is going to render the element.
               
               An <Outlet> should be used in parent route elements to render their child route elements. This allows 
               nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render 
               a child index route or nothing if there is no index route.
            */ 
         }
         
         {
            /*
               IMPORTANT: without the <Outlet />> below, React does not know where to render the 
               ** nested ** matching elements (components) 
            */
         }
         <Outlet />
         <Directory categories={categories} />
      </div>
   ) ;
};

export default Home;
