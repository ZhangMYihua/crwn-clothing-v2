import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const{cartItems}= useContext(CartContext)
    const navigate= useNavigate()

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
                {
                    cartItems.length ? (cartItems.map((item)=> (
                        <CartItem key={item.id} cartItem={item}/>
                ))) :(
                    <span className='empty-message'>Your cart is Empty</span>
                )
                    }
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown