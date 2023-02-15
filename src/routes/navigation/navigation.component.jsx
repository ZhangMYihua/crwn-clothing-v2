import { Link, Outlet } from "react-router-dom";

import './navigation.styles.scss';
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'

const Navigation = () => {
 

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'> 
          <CrwLogo className="logo"/>
        </Link>        
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link> 
          <Link className="nav-link" to="/sing-in">
            SING IN
          </Link>
          <Link></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
