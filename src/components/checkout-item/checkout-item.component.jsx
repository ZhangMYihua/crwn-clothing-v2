import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss'
const CheckoutItem = ({ item }) => {
    const { removeItemFromCart, clearItemFromCart, addItemToCart } = useContext(CartContext);

    const clearItem = () => clearItemFromCart(item);

    const subOneItem = () => removeItemFromCart(item)
    const addOneItem = () => addItemToCart(item)
    return (
        <div className="checkout-item-container">
            <img className="image-container" src={item.imageUrl} alt="" />
            <span className="name">{item.name}</span>
            <div className="quantity">
                <div className='arrow' onClick={subOneItem}>
                    &#10094;
                </div>
                <span className="value">{item.quantity}</span>
                <div className='arrow' onClick={addOneItem}>
                    &#10095;
                </div>
            </div>
            <span className="price">{item.price}</span>
            <div className='remove-button' onClick={clearItem}>
                &#10005;
            </div>
        </div>
    )
};

export default CheckoutItem;