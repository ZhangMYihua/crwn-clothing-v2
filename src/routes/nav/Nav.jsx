import { Outlet, Link } from "react-router-dom";
import './nav.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
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

export default Nav;