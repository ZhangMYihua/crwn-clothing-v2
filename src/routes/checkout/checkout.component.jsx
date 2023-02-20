import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../../components/cart-item/cart-item.component";


const Checkout = ({cartItem}) =>{

    const {cartItems, addItemToCart,removeItemFromCart} = useContext(CartContext);
    
    return(
        <>
        <h1>This is Checkout Counter</h1>
        <div>
              {cartItems.map((cartItem) =>{
                
                const {id, name , quantity} = cartItem;
                
                return(
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>
                        <span onClick = {()=>addItemToCart(cartItem)}>increment</span>
                    </div>
                )
              })}
        </div>
        </>
    );
}
export default Checkout;
