import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icron";
import CartDropDown from '../../components/cart-dropdown/cart-dropsown'
import { UserContext} from '../../contexts/user.context';
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import { NavigationContainer, LogoConainer, NavLinks, NavLink } from "./navigation-style";


    const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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