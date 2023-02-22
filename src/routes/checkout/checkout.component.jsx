import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckOutItems from "../../components/checkout-items/checkout-items.component";


const Checkout = ({cartItem}) =>{

    const {cartItems,cartTotal} = useContext(CartContext);
    
    return(
        <div className="checkout-container">
            <div className="checkout-header">
            
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
            </div>    
        

            {
              cartItems.map((cartItem) =>(
                <CheckOutItems key={cartItem.id} cartItem={cartItem}/>)
              )
            }

        <span className="total">Total : ${cartTotal}</span>
        </div>
    );
}
export default Checkout;
