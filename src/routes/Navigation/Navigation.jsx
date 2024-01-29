import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.Style.scss";
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo">
          <Link className="logo-container" to="/">
            <div>Logo</div>
          </Link>
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {/* <Link className="link" to="/blog">
            Blog
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
