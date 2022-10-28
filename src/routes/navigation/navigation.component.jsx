import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss"

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return ( 
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? 
                        (<span className="nav-link" onClick={userSignOut}>SIGN OUT</span>) :
                        (<Link className="nav-link" to="/auth">SIGN IN</Link>)
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/> }
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default Navigation;