import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navbar-item.styles.scss';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/contact'>CONTACT</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                    <Link className='nav-link' to='/cart'>CART</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavBar;