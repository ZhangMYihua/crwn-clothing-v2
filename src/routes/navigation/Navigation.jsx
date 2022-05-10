import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/CartIcon';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.scss';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign out
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							Sign in
						</Link>
					)}
					<CartIcon />
				</div>
				{cartIsOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
