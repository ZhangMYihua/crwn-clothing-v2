import { Outlet } from "react-router-dom";
import {useSelector} from 'react-redux' 
// this is a hook that allows a component to extract state from the Redux store
import { NavContainer, LogoContainer, NavLink, NavLinks } from './nav.styles'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../store/user/user.selector";

export const Nav = () => {
  // const currentUser = useSelector((state) => state.user.currentUser)
  const currentUser = useSelector(selectCurrentUser)
  // this is how you can select state from the store and integrate it into the component
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

