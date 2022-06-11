import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);

  const close = () => {
    setIsCartOpen(false);
  };

  return (
    <div onMouseLeave={close} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span className="Your cart is empty">Your cart is empty</span>
        )}
      </div>
      <Button buttonType="default">
        <Link to="/checkout">CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
