import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const close = () => {
    setIsCartOpen(false);
  };

  return (
    <div onMouseLeave={close} className="cart-dropdown-container">
      <div className="cart-items">
        <span className="Your cart is empty">Your cart is empty</span>
      </div>
      <Button buttonType="default">CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
