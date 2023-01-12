import { Fragment } from "react";
import { Outlet ,Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import './navigations.scss'
const Navigation = () => {
    return (
      <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shope'>
            SHOP
          </Link>
          <Link className='nav-link' to='auth'>
          Aunthentication
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
  };
export default Navigation