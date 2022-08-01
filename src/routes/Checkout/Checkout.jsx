import './Checkout.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='checkout-header-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Remove</span>
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