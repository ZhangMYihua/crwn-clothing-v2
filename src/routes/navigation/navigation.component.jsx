import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.componet';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.contexts';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {NavigationContainer, LogoContainer, Navlinks, Navlink } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <Navlinks>
          <Navlink to='/shop'>
            SHOP
          </Navlink>
          
          { currentUser ? (
              <Navlink as='span' onClick={signOutUser}>
                SIGN OUT
              </Navlink>) 
             : ( 
              <Navlink to='/auth'>
                SIGN IN
              </Navlink>
            )
          }
          <CartIcon className='cart-icon-container' /> 
        </Navlinks>
        { isCartOpen && <CartDropdown className='cart-container' />}
      </NavigationContainer> 
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
