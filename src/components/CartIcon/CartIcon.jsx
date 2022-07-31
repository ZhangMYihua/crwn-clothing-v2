import './CartIcon.scss'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingCartIcon className='cart-icon' />
            <span className='cart-item-count'>
                0
            </span>
        </div>
    )
}

export default CartIcon