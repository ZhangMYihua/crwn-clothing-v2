import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd)=>{
    
    //Find if cartItems contains productToAdd
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id ==productToAdd.id )
    
    
    //If yes, increment quantity
            if (existingCartItem){
                return(
                cartItems.map((cartItem) => cartItem.id == productToAdd.id 
                ? {...cartItem,quantity:cartItem.quantity + 1}
                : cartItem
                ));
            }
    
    
    //return new array with modified Items(new Cart Item)
    return [...cartItems,{...productToAdd,quantity : 1}];
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems :[],
    addItemsTosCart : () =>{}
})
export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems] = useState([]);
 
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }



    const value = {isCartOpen,setIsCartOpen ,addItemToCart, cartItems};
    return(
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}