import './CartDropdown.scss';
import Button from '../../components/Button/Button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button btnType='primaryBtn' >
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

export default CartDropdown