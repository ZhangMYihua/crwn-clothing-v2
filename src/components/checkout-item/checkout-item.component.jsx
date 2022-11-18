import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
    const { change,remove } = useContext(CartContext);
    return (
        <div className="checkout-item-container">
            <img className="image-container" src="" alt="" />
            <span className="name">{item.name}</span>
            <div className="quantity">
                <span>lr</span>
                <span>{item.quantity}</span>
                <span>rr</span>
            </div>
            <span className="price">{item.price}</span>
            <span className="remove">xb</span>
        </div>
    )
};

export default CheckoutItem;