import { Fragment,useContext } from "react";
import {signOutUser} from "../../../utils/firebase/firebase.utils"
import { userContext } from "../../../contexts/user.context";
import {CartContext} from "../../../contexts/cart.context"
import { Outlet,Link} from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg"
import CartIcon from "../../cart-icon/CartIcon.component";
import CartDropdown from "../../cart-dropdown/CartDropdown.component"
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from"./navigation.style"




const Navigation =  ()=>{ 
  const {isCartOpen} = useContext(CartContext)
  const {currentUser} = useContext(userContext);

  
    return( 
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className ='logo'/>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            
            {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
            {/* {!currentUser ? (<NavLink to='/auth'>SIGN IN</NavLink>) : 
            (<NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>)} */}
            
            <CartIcon/>
          </NavLinks>
          
            
          
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>   
        <Outlet/>   
      </Fragment>
    )
  };
export default Navigation;