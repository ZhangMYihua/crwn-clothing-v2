import { Fragment, useContext} from 'react';
import {Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart.icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {LogoContainer,NavigationContainer,NavLinksContainer, NavLink} from './navigation.styles.jsx'


const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
  

    return(
    <Fragment>
      <NavigationContainer>
      <LogoContainer to="/">
      <CrwnLogo className='logo'/>
      </LogoContainer>
      <NavLinksContainer>
      <NavLink to="/shop">
        Shop
      </NavLink>
      {currentUser? (
        <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
      ) : (
        <NavLink to="/auth">
        Sing In
      </NavLink>

      )}
     
        <CartIcon />

      </NavLinksContainer>
     
        { isCartOpen &&  <CardDropdown/> }
        
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )
    
    
    }

    export default Navigation