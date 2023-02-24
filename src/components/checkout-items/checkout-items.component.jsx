import "./checkout-items.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const CheckOutItems = ({cartItem}) =>{

    const { name, price , imageUrl , quantity} = cartItem;
    const {cancelProduct, addItemToCart,removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => cancelProduct(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);


    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src= {imageUrl} alt = {`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}><strong>&#10005;</strong></div>
        </div>
    )
}
export default CheckOutItems;