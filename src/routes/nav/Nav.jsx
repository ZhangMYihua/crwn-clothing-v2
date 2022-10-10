import { Outlet } from "react-router-dom";
import { NavContainer, LogoContainer, NavLink, NavLinks } from './nav.styles'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";

export const Nav = () => {
  // useContext rerenders the component whenever a value inside its context is updated
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)


  return (
    <>
      <NavContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo'/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          { currentUser ? (
            <NavLink as='span' onClick={signOutUser} >Sign Out</NavLink> )
            : (<NavLink to='/auth'>
            Sign In
          </NavLink>)
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavContainer>
      <Outlet />
    </>
  );
};

