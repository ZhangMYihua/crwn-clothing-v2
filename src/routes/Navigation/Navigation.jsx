import { Outlet, Link } from 'react-router-dom';
import './Navigation.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.js';
const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log({ currentUser });
	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};
	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrownLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Shop
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							Sign Out
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
