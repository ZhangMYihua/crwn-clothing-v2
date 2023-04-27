
import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const CheckoutItem = ({CartItem}) => {
    const {name,quantity,imageUrl,price} = CartItem;
    const {deleteProduct,addItemsToCart,reduceItemsToCart} = useContext(CartContext);

    const addItemsToCartHandler = ()=> addItemsToCart(CartItem);
    const reduceItemsToCartHandler = ()=> reduceItemsToCart(CartItem);
    const deleteProductHandler = ()=> deleteProduct(CartItem);

    return (
        <div className="checkout-item-container">
        <div className="image-container">
        <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={reduceItemsToCartHandler}>&#10094;</div>
        
        <span className="value">{quantity}</span>
       
        <div className="arrow" onClick={addItemsToCartHandler}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={deleteProductHandler}>&#10005;</div>
        </div>



    )


}

export default CheckoutItem;