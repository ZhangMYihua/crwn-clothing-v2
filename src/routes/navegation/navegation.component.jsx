import { Fragment, useContext,useState} from 'react';
import {Outlet , Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart.icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navegation.styles.scss';


const Navegation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
  

    return(
    <Fragment>
      <div className='navigation'>
      <Link className='logo-container' to="/">
      <CrwnLogo className='logo'/>
      </Link>
      <div className='nav-links-container '>
      <Link className='nav-link' to="/shop">
        Shop
      </Link>
      {currentUser? (
        <span className='nav-link' onClick={signOutUser}>Sign Out</span>
      ) : (
        <Link className='nav-link' to="/auth">
        Sing In
      </Link>

      )}
     
        <CartIcon className='nav-link'/>

      </div>
     
        { isCartOpen &&  <CardDropdown/> }
        
      </div>
      <Outlet />
    </Fragment>
    )
    
    
    }

    export default Navegation