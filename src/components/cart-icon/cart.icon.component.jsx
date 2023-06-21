import { useDispatch, useSelector } from "react-redux";
import {
  selectCartIsOpen,
  selectCartCounts,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartCounts = useSelector(selectCartCounts);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCounts}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
