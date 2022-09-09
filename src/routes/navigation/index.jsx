import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutUserHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
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
            <span className="nav-link" onClick={signOutUserHandler}>
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
