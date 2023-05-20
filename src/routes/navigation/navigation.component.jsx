import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import  CartIcon from '../../components/cart-icon/cart-icon.componet';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.contexts';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
  

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          
          { currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
             ) : ( <Link className='nav-link' to='/auth'>SIGN IN</Link>
            )
          }
           <CartIcon className='cart-icon-container' />  
        </div>
        <CartDropdown className='cart-dropdown-container' />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
