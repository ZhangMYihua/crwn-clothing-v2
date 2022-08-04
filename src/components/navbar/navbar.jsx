import './navbar.scss'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { logoutUser } from '../../utils/firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Navbar = () => {
    const { user } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="nav-container">
                <Link className="logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/contact">
                        CONTACT
                    </Link>
                    {
                        user ? (
                            <span className='nav-link' onClick={logoutUser}>
                                LOG OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/login">
                                LOG IN
                            </Link>
                        )
                    }
                    <CartIcon />
                    {isCartOpen && <CartDropdown />}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar