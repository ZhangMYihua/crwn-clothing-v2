import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context"

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import './navigation.styles.jsx'
import { NavigationContainer, NavLink, NavLinks, Logo } from './navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)


    return (
        <Fragment>
            <NavigationContainer>
                <Logo to='/'>
                    <CrownLogo className='logo' />
                </Logo>
                <NavLinks>
                    <NavLink to='/shop' >
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth' >
                                SIGNIN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;