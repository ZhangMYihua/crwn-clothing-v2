import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutContainer, CheckoutHeader, Total, HeaderBlock} from './checkout.styles.jsx'


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
     <CheckoutContainer>
        <CheckoutHeader>
        <HeaderBlock>
            <span>Product</span>
         </HeaderBlock>
            <HeaderBlock>
            <span>Description</span>
         </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
         </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>  
         </HeaderBlock>
        <HeaderBlock>
            <span>Remove</span>  
         </HeaderBlock>
        </CheckoutHeader>
           {cartItems.map((cartItem) => (
               <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total as='span' >Total: ${cartTotal}</Total>
     </CheckoutContainer>
    ); 
}

export default Checkout;