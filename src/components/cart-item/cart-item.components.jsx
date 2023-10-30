import { CartItemContainer, Image, ItemDetails, Name, Price } from "./cart-item.styles";

const CartItem = ({ cartItem }) =>{
    const { name,imageUrl,price, quantity} = cartItem;
    return(
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
            <Name>{name}</Name>
            <Price>{quantity} x ${price} </Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;