import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import './checkout.scss';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    return ( 
        <div className='checkout-container'>
         <div className="checkout-header">
          <div className="header-clock">
           <span>Product</span>
          </div>
          <div className="header-clock">
           <span>Description</span>
          </div>
          <div className="header-clock">
           <span>Quantity</span>
          </div>
          <div className="header-clock">
           <span>Price</span>
          </div>
          <div className="header-clock">
           <span>Remove</span>
          </div>
          
         </div>
         
         
          {
            cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            })
          }
          <span className='total'>Total: ${cartTotal}</span>
        </div>
     );
}
 
export default Checkout;