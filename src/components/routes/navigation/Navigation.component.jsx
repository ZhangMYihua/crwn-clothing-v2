import { Fragment,useContext } from "react";
import {signOutUser} from "../../../utils/firebase/firebase.utils"
import { userContext } from "../../../contexts/user.context";
import {CartContext} from "../../../contexts/cart.context"
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg"
import CartIcon from "../../cart-icon/CartIcon.component";
import CartDropdown from "../../cart-dropdown/CartDropdown.component"
import "./navigation.style.scss"




const Navigation =  ()=>{ 
  const {isCartOpen} = useContext(CartContext)
  const {currentUser} = useContext(userContext);

  
    return( 
      <Fragment>
        <div className = 'navigation'>
          <Link className ='logo-container' to='/'>
            <CrwnLogo className ='logo'/>
          </Link>
          <div className ='nav-links-container'>
            <Link className="nav-link" to='/shop'>SHOP</Link>
            <Link className="nav-link" to='/auth'>{
            !currentUser ? (<span className="nav-link">SIGN IN</span>) : 
            (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)}
            </Link>
            <CartIcon/>
          </div>
          
            
          
          {isCartOpen && <CartDropdown/>}
        </div>   
        <Outlet/>   
      </Fragment>
    )
  };
export default Navigation;