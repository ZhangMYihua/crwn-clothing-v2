import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

/*
   A Fragment is a React component that renders to nothing when it gets mounted
   on the DOM. The whole reaon for using a Fragment is because of React rules where 
   a component must have a top-level parent containing component.

   A Fragment is useful if you don't actually want to render some specific HTML element.
*/

/*
   Link component is essentially an anchor tag, but what it does is that it actually 
   appropriately dynamically uses the correct browser that you have installed (BrowserRouter)
   and it will take your application to that specific place.

   The Link component is what we use in order to leverage proper routing, just like we do with
   the anchor tag.

*/

const Navigation = () => {

   /*
      useContext, as a hook, tells this component that whenever a value inside of this context (UserContext)
      updates, re-render this component!

      When a user signs in -- inside sign-in.form.component.jsx -- the setCurrentUser was called. 
      (Remember, a component re-renders whenever its state updates or whenver its props changes.) 
      Then, any component listening for currentUser should in turn update which then triggers a re-rendering.
   */

   const {currentUser} = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);

   //Fragment allows us to wrap child elements without creating a extra div
   return (
      
      <Fragment>
         <div className='navigation'>
            <Link className='logo-container' to='/'>
               <CrwnLogo className='logo' />
            </Link>
            
            <div className='nav-links-container'>
               {/* the to property tells Link which Route to match */}
               <Link className='nav-link' to='/shop'>
                  SHOP
               </Link>
               {
                  currentUser 
                     ? (<span className='nav-link' onClick={signOutUser}>
                           SIGN OUT
                        </span>) 
                     : (
                        <Link className='nav-link' to='/auth'>
                           SIGN IN
                        </Link>
                       )
               }
               
               <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
         </div>
         <Outlet />
      </Fragment>
   );
};

export default Navigation;