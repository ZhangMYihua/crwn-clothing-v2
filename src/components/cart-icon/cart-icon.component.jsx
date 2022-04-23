import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { cart, setCart, cartAmount } = useContext(CartContext);

    const toggleCart = () => setCart(!cart);

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartAmount}</span>
        </div>
    );
}

export default CartIcon;