import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';

import { ReactComponent as  CrwnLogo} from "../../assets/crown.svg";

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-links" to='/shop'>Shop</Link>
            </div>
          
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation