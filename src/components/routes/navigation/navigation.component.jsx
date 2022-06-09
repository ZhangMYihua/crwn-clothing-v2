import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { useContext } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

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
          {currentUser ? (
            <Link onClick={signOutHandler} className="nav-link" to="/auth">
              LOG OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
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
