import Button from '../button/button.component';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;