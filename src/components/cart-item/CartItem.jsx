import { CartItemsContainer, ItemDetails } from "./cart-item.styles";

export const CartItem = ({cartItem}) => {
  const {name, quantity, imageUrl, price} = cartItem;
  return (
    <CartItemsContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className='name' >{name}</span>
        <span className='price' >{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemsContainer>
  )
}