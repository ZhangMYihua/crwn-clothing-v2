import './checkout-item.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CheckoutItems = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { incItemQuantity, decItemQuantity, removeItemFromCart } = useContext(CartContext);

    const incQuantity = () => { incItemQuantity(cartItem) }

    const decQuantity = () => { decItemQuantity(cartItem) }

    const removeFromCart = () => { removeItemFromCart(cartItem) }

    return (
        <div className='checkout-item-container'>

            <div className='checkout-item-img'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='checkout-item-name'>{name}</span>

            <div className='checkout-item-quantity'>
                <div
                    className='checkout-arrow'
                    onClick={decQuantity}
                    style={{
                        pointerEvents: quantity > 1 ? 'all' : 'none',
                        color: quantity > 1 ? 'black' : 'grey'
                    }}
                >
                    &#10094;
                </div>
                <span className='checkout-item-value'> {quantity} </span>
                <div className='checkout-arrow' onClick={incQuantity}>
                    &#10095;
                </div>
            </div>

            <span className='checkout-item-price'> ${quantity * price}</span>

            <div onClick={removeFromCart} className='remove-from-cart-btn'>
                &#10005;
            </div>
        </div >
    )
}

export default CheckoutItems