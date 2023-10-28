import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
const CartIcon = ()=>{

    const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen=()=>{
        setIsCartOpen(!isCartOpen)
    }

    return(
        <div onClick={toggleIsCartOpen} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;