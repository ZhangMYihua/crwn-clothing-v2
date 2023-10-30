import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart-context';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';

const NavigationBar = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    
    return (
      <Fragment>
        <NavigationContainer> 
            <LogoContainer to="/">
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>)
                        :(<Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>)
                    }
                    <CartIcon />
                
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default NavigationBar;