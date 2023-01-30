import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.actions';
import { selectCartCount } from '../../store/cart/cart.selector';

import {CartIconContainer,ItemCount } from './cart-icon.styles.jsx';
const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector(selectCartCount);

    const toggleIsCartOpen  = () => {
        dispatch(setIsCartOpen());
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen }>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon