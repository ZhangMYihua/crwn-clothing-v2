import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isDropdownOpen, setIsDropdownOpen, itemCount } =
    useContext(CartContext);
  const toggleIsDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <CartIconContainer onClick={toggleIsDropdownOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
