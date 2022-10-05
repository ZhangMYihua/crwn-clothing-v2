import { useContext } from 'react';
import { CheckoutItem } from '../../components/checkout-item/checkout-tem.component';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, total, addItemToCart, removeItem } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          item={item}
          addItemToCart={addItemToCart}
          removeItem={removeItem}
        />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  );
};
export default Checkout;
