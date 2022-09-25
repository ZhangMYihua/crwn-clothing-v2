import { Outlet, Link } from "react-router-dom";
import './nav.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Nav = () => {
  // useContext rerenders the component whenever a value inside its context is updated
  const {currentUser} = useContext(UserContext)
  console.log('nav', currentUser)

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

