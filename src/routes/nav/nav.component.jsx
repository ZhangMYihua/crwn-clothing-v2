import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <div>
          <Link to="/shop">SHOP</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
