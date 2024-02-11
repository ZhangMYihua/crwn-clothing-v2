import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import {CartIconContainer} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext); 

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
 
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
           <ShoppingIcon className='shopping-icon'/>
           <span className='item-count'>{cartCount}</span>
        </CartIconContainer>
    ) 
}

export default CartIcon;
