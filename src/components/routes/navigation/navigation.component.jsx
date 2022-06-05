import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/cart">
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
