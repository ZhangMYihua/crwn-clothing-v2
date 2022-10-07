import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/context.user';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <Link className="nav-link">
            <CartIcon />
          </Link>
        </NavLinks>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
