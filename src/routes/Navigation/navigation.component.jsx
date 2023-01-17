import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import { ReactComponent as  CrwnLogo} from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, NavLink, NavLinksCotainer, LogoContainer } from './navigation.styles.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
    return (
      <Fragment>
        <NavigationContainer>
              <LogoContainer to="/">
                <CrwnLogo/>
              </LogoContainer>
              <NavLinksCotainer>
                  <NavLink to='/shop'>SHOP</NavLink>
                  { currentUser ? (
                    <NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>
                  ) : (
                    <NavLink to='/auth'>SIGN IN</NavLink>
                  )}         
                  <CartIcon/>  
              </NavLinksCotainer>
              { isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation