import { useContext } from "react";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);
  const toggleIsDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div onClick={toggleIsDropdownOpen} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  );
};

export default CartIcon;
