import { Outlet } from "react-router-dom";
import { useSelector  } from "react-redux";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icron";
import CartDropDown from '../../components/cart-dropdown/cart-dropsown'
import { selectIsCartOpen } from '../../store/cart/cart-selector'
import { selectCurrentUser } from "../../store/user/user-selector";
import { signOutUser } from "../../utils/firebase/firebase";
import { NavigationContainer, LogoConainer, NavLinks, NavLink } from "./navigation-style";


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoConainer to='/'>
             <CrownLogo className='logo' />
            </LogoConainer>          
            <NavLinks>
                <NavLink to='shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                     <NavLink as='span' onClick={signOutUser}>
                         {' '}
                             SIGN OUT {' '}
                         </NavLink>
                        )  : (
                        <NavLink to='auth'>
                    SIGN IN
                </NavLink>)}
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;