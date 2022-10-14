import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-caontainer" to='/'>
                <CrownLogo className='logo' />
            </Link>          
            <div className="nav-links-container">
                <Link className="nav-link" to=''>
                    SHOP
                </Link>
                <Link className="sign-in-link" to='auth'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;