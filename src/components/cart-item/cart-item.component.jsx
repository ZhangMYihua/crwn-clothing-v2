import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const totalPrice = quantity * price;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} * ${price} = ${totalPrice}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
