import { Fragment } from 'react';
import {Outlet , Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navegation.styles.scss';

const Navegation = () => {
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
      <Link className='nav-link' to="/sing-in">
        Sing In
      </Link>
      </div>

      </div>
      <Outlet />
    </Fragment>
    )
    
    
    }

    export default Navegation