import { React, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
// importing svg
import { ReactComponent as CrwLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
// top level component

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwLogo className='logo'>Logo</CrwLogo>
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/sign-in'>
						SING IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
