import { Fragment } from "react";
/*
 Fragment renders nth, use it to simulate one level up for Outlet 
 so that we don't use wrapping <div> which requires to render some HTML.
*/
 import { Outlet, Link } from "react-router-dom";
 import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
 import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;