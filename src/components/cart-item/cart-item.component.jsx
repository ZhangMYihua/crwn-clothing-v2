
import {ItemContainer,ItemDetails} from "./cart-item.styles.jsx";

const CartItem = ({CartItem}) => {
    const {name,imageUrl, price,quantity} = CartItem;

    return (
        <ItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            
            <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
            </ItemDetails>

        </ItemContainer>
    )

}


export default CartItem