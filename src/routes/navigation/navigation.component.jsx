import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
        <div className='nav-link' onClick={signInWithGoogle}>
          Sign In With Google
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
