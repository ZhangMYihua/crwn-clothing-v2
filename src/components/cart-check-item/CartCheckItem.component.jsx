import "./cartCheckItem.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";



const CartCheckItem = ({cartItem})=>{

    const {name,imageUrl,quantity,price} = cartItem;
    const {decQuantity,addItemToCart,removeItemFromCheckout} = useContext (CartContext);
    const incHandler = ()=> addItemToCart(cartItem);
    const decHandler = ()=> decQuantity(cartItem);
    const delHandler = ()=> removeItemFromCheckout(cartItem);

return(
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        
        <span className="name">{name}</span>
        
        <span className="quantity">
            <span className="arrow" onClick={decHandler}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={incHandler}>&#10095;</span>
        </span>
        
        <span className="price">{price}</span>
        <div className="remove-button" onClick = {delHandler}>&#10005;</div>   
      
    </div>
)

}


export default CartCheckItem;