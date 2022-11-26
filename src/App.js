import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import {Routes, Route} from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigation />}>
            {
               /*
                  whenever the path matches '/', the parental component is Navigation.
                  However, index specifies that the base component inside the parental 
                  component is Home.

                  Index Route - A route that shares the same URL as the parent route but 
                  renders as the default child route inside of <Outlet>.
               */

               /*
                  The routes below are relative to the path of the parent.
                  For example for route "shop" defined below to match, it must first match
                  the parent ('/') and then it has to match 'shop'
               */
            }
            <Route index element={<Home />} /> {/* <<<<--- this route shares the same URL as the parent route */}
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
         </Route>
      </Routes>
   );

   // return (
   //    //wrap anything that is going to be ** routable ** inside of the Routes component
   //    //what Routes does is allow this application to register these route level components 
   //    //that will then in turn render a specific component when it matches this specific route
   //    //that you are looking for. This is done by providing a specific path attribute
   //    <Routes>
   //       {/* the slash is the end of the path we are trying to match. When it matches,
   //           render the component specified (in this case, the Home component)
   //       */}

   //       <Route path='/home' element={<Home />}>
   //          {/* nest the shop route inside of the Home route. This does a couple of things:
   //                1. it makes the path that's nested inside relative to the path of the parent;
   //                   this means it must match the parent first ('/home') and then it has to match /shop.
   //                   So the match has to be /home/shop


   //           */
   //          }

   //          <Route path='shop' element={<Shop />} />
   //       </Route>
   //       {
   //          /* 
   //             If we place the Route below at the top level, it will REPLACE the entire page
   //             with the Shop component. This is not what we want to do, in this case. That's why
   //             Shop is defined to be a child of the Home component above
   //             <Route path='/shop' element={<Shop />} />  
   //          */
   //       }

         
   //    </Routes>
   // );

   /*
      The reason why these components are able to connect to the URL and therefore render
      the appropriate elements (components) is because of the fact that these are nested 
      inside of the BrowserRouter (in index.js)
   */
};

export default App;
