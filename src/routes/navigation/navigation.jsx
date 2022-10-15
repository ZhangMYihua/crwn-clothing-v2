import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icron";
import CartDropDown from '../../components/cart-dropdown/cart-dropsown'
import { UserContext} from '../../contexts/user.context';
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import './navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-caontainer" to='/'>
                <CrownLogo className='logo' />
            </Link>          
            <div className="nav-links-container">
                <Link className="nav-link" to='shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                     <span className="nav-link" onClick={signOutUser}>
                         {' '}
                             SIGN OUT {' '}
                         </span>
                        )  : (
                        <Link className="sign-in-link" to='auth'>
                    SIGN IN
                </Link>)}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;