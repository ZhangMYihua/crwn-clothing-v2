import './navigation.styles.scss';
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
const NavigationBar = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default NavigationBar;