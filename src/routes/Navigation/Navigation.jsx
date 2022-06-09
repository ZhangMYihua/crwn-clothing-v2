import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.js';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyles';
const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>

				<NavLinks>
					<NavLink to='/shop'>Shop</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to='/auth'>Sign In</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropDown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
