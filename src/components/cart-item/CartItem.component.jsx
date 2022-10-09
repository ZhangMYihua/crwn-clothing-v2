import {CartItemContainer,ItemDetails,BaseSpan} from"./cartItem.styles.jsx";

const CartItem = ({cartItem})=> {
    const {name,price,imageUrl, quantity} = cartItem;
    
    return(
        <CartItemContainer>
            <img src={imageUrl} alt ={name}/>
            <ItemDetails>
                <BaseSpan>{name}</BaseSpan>
                <BaseSpan>{quantity} x {price}</BaseSpan>
            </ItemDetails>
            
        </CartItemContainer>
    )

}

export default CartItem;