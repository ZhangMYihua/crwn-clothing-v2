import './cart-icon.scss'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingCartIcon className='cart-icon' />
            <span className='cart-item-count'>
                {cartCount}
            </span>
        </div>
    )
}

export default CartIcon