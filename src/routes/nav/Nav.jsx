import { Outlet, Link } from "react-router-dom";
import './nav.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";

export const Nav = () => {
  // useContext rerenders the component whenever a value inside its context is updated
  const {currentUser} = useContext(UserContext)


  return (
    <>
      <div className='nav'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          
          { currentUser ? (
            <span className="nav-link" onClick={signOutUser} >Sign Out</span> )
            : (<Link className='nav-link' to='/auth'>
            Sign In
          </Link>)
          }
          <CartIcon/>
        </div>
        <CartDropdown/>
      </div>
      <Outlet />
    </>
  );
};

