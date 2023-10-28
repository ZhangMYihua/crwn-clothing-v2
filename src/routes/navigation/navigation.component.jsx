import './navigation.styles.scss';
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart-context';

const NavigationBar = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    
    return (
      <Fragment>
        <div className="navigation"> 
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                    {currentUser ? (
                        <span onClick={signOutUser} className='nav-link'>SIGN OUT</span>)
                        :(<Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>)
                    }
                    <CartIcon />
                
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default NavigationBar;