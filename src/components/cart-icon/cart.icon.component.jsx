
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CartIconContainer,ItemCount, ShoppingIcon} from './cart-icon.styles.jsx';


const CartIcon = () => {
        const {isCartOpen,setIsCartOpen, cartCounts}= useContext(CartContext);
       

    return (

        <CartIconContainer  onClick={()=>{
            setIsCartOpen(!isCartOpen);
        }}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCounts}</ItemCount>
        </CartIconContainer>


    )





}

export default CartIcon;