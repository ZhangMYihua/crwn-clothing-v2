import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerBlocks.map((block) => (
          <div className="header-block" key={block}>
            <span>{block}</span>
          </div>
        ))}
      </div>

      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}

      <span className="total">Total : {cartTotal}</span>
    </div>
  );
};

export default Checkout;
