import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import { NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../contexts/cart.context";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  // console.log(currentUser);
  const {isCartOpen} = useContext(CartContext)
    return (
      <Fragment>
      <NavigationContainer>
                <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
                </LogoContainer>
           <NavLinks>
                <NavLink  to='/shop'>Shop</NavLink>
                <NavLink  to='/'>Contact</NavLink>
                
                {currentUser ? (
                    <NavLink as='span'  onClick={signOutUser}>SIGN OUT</NavLink>)
                  : (<NavLink  to='/auth'>Sign in</NavLink>
                  )}
              
              <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>} 
  
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }
  
  export default Navigation