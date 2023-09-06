import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className="navigation">
                <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
                </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop</Link>
                <Link className="nav-link" to='/'>Contact</Link>
                {
                  currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                  : (<Link className="nav-link" to='/auth'>Sign in</Link>)
                }
              
              <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>} 
        </div>
        <Outlet/>
      </Fragment>
    )
  }
  
  export default Navigation