import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { 
    NavigationContainer, 
    LogoContainer, 
    NavigationLinks, 
    NavigationLink 
} from './navbar-item.styles.jsx';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);

    const exitCartDropdownMenu = () => setCart(false);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/' onClick={exitCartDropdownMenu}>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavigationLinks>
                    <NavigationLink to='/shop' onClick={exitCartDropdownMenu}>Shop</NavigationLink>
                    <NavigationLink to='/contact' onClick={exitCartDropdownMenu}>Contact</NavigationLink>
                    {
                        currentUser ? (
                            <NavigationLink as='span' onClick={signOutUser}>Sign Out</NavigationLink>
                        ) : (
                            <NavigationLink to='/sign-in' onClick={exitCartDropdownMenu}>Sign In</NavigationLink>
                        )
                    }
                    <CartIcon />
                </NavigationLinks>
                { cart && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default NavBar;