import { Outlet} from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown(1).svg";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../../components/Cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavLinksContainer,
  NavLink,
  NavigationContainer,
  LogoContainer,
} from "./navigation.styles";
import { signOutStart } from "../../store/user/user.action";
// import "./navigation.styles.scss";

const Navigation = () => {

  const dispatch = useDispatch()

  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser)
  // const { currentUser } = useContext(UserContext);
  
  const isCartOpen = useSelector(selectIsCartOpen);
  // const { isCartOpen } = useContext(CartContext);


  const signOutHandler = async () => {
    // await signOutUser();
    dispatch(signOutStart())
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
