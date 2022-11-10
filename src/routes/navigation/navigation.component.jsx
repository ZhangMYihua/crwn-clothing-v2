import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwLogo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
            ) : (
            <Link className='nav-link' to='/auth'>
              SIGN-IN
            </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;