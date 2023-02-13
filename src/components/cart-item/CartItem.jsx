import { CartItemContainer, ItemDetails, Name, Price } from "./cart-item.styles";

export const CartItem = ({cartItem}) => {
  const {name, quantity, imageUrl, price} = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>{quantity} x ${price}</Price>
      </ItemDetails>
    </CartItemContainer>
  )
}