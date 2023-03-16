import { FC } from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';


export type CartItemProps  = {
  cartItem:{
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
  }
} 

const CartItem:FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
