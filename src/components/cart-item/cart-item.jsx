import './cart-item.scss'

const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='cart-item-details'>
                <h2 className='cart-item-name'>{name}</h2>
                <span className='cart-item-price-x-quantity'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
