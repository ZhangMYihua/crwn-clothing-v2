import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";

const CartIcon =()=>{
    const  {isCartOpen,setisCartOpen,cartCount} = useContext(CartContext)
    
    const toggleIsCartOpen=()=>{
        setisCartOpen(!isCartOpen)
    }

    return(
        <div  className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon