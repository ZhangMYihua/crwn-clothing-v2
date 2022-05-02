import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { signOutStart } from '../../store/user/user.action';

import { 
    NavigationContainer, 
    LogoContainer, 
    NavigationLinks, 
    NavigationLink 
} from './navbar-item.styles.jsx';

const NavBar = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const exitCartDropdownMenu = () => dispatch(setIsCartOpen(false));
    const signOutUserDispatch = () => dispatch(signOutStart());

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
                            <NavigationLink as='span' onClick={signOutUserDispatch}>Sign Out</NavigationLink>
                        ) : (
                            <NavigationLink to='/sign-in' onClick={exitCartDropdownMenu}>Sign In</NavigationLink>
                        )
                    }
                    <CartIcon />
                </NavigationLinks>
                { isCartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default NavBar;