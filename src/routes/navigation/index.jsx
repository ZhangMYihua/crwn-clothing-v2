import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";
import { UserContext } from "../../contexts/userContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign-out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
