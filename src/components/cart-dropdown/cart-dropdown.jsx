import './cart-dropdown.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom'
import EmptyCart from '../../assets/empty-cart.png';

const CartDropdown = () => {
    const { cartItems, cartCount } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartCount !== 0 ?
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    )) :
                    <img src={EmptyCart} alt="empty" className='empty-cart'/>
                }
            </div>
            <Link to='/checkout'>
                <Button
                    btnType='primaryBtn'
                    style={{ width: '100%' }}
                >
                    GO TO CHECKOUT
                </Button>
            </Link>
        </div>
    )
}

export default CartDropdown