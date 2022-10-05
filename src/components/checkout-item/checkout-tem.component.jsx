import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

export const CheckoutItem = ({ item }) => {
  const { clearCartItem, addItemToCart, removeItem } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItem(item);
  };

  const addItemToCartHandler = () => {
    addItemToCart(item);
  };

  const clearCartItemHandler = () => {
    clearCartItem(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
