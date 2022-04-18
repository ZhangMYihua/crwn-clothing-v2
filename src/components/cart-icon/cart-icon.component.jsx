import { useDispatch, useSelector } from "react-redux";
import {
  selectItemCount,
  selectIsDropdownOpen,
} from "../../store/cart/cart.selector";
import { setIsDropdownOpen } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemCount);
  const isDropdownOpen = useSelector(selectIsDropdownOpen);
  const toggleIsDropdownOpen = () =>
    dispatch(setIsDropdownOpen(!isDropdownOpen));

  return (
    <CartIconContainer onClick={toggleIsDropdownOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
