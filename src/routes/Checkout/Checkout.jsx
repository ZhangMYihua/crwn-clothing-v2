import './checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='checkout-header-block'>
                    Product
                </div>
                <div className='checkout-header-block'>
                    Description
                </div>
                <div className='checkout-header-block'>
                    Quantity
                </div>
                <div className='checkout-header-block'>
                    Price
                </div>
                <div className='checkout-header-block'>
                    Remove
                </div>
            </div>

            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })}

            <div className='total-price'>Total : ${cartTotal}</div>
        </div>
    )
}

export default Checkout