import { Outlet, Link } from 'react-router-dom';
import './Navigation.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
const Navigation = () => {
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
					<Link className='nav-link' to='/auth'>
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
