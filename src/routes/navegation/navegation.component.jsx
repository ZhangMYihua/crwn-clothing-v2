import { Fragment, useContext} from 'react';
import {Outlet , Link} from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navegation.styles.scss';


const Navegation = () => {

    const {currentUser} = useContext(UserContext);

    // setCurrentUser
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

    return(
    <Fragment>
      <div className='navigation'>
      <Link className='logo-container' to="/">
      <CrwnLogo className='logo'/>
      </Link>
      <div className='nav-links-container '>
      <Link className='nav-link' to="/shop">
        Shop
      </Link>
      {currentUser? (
        <span className='nav-link' onClick={signOutUser}>Sign Out</span>
      ) : (
        <Link className='nav-link' to="/auth">
        Sing In
      </Link>

      )

      }

     
      </div>

      </div>
      <Outlet />
    </Fragment>
    )
    
    
    }

    export default Navegation