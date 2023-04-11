import { createContext, useState} from "react";

const addCartItem = (cartItems,productToAdd) => {

//find if cartItems contain productToAdd.
    const existingProduct = cartItems.find((cartItem)=> cartItem.id === productToAdd.id );
    
// if found increment quantity.

 if (existingProduct) {
    // If a existingProduct is found we want to return a new array of cardItems
    //  Map makes a new array so i had to be sure if the products match to add +1 or simply let the product whit not change 
    return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id ?
// this mean that we  have a brand new object but we spreading trough all of the old properties  but now just adding 1 to the "quantity"
         {...cartItem,quantity: cartItem.quantity + 1} 
 // If don't match just return the cartItem don't improve it...
        : cartItem
            )

 }


// return new array whit whit modified cartItems/ new cart item
    return [...cartItems,{...productToAdd, quantity:1}];

}


export const CartContext = createContext({

    isCartOpen:false,
    setIsCartOpen:() => {},
    cartItems:[],
    addItemsToCart: () => {},



});


export const CartProvider = ({children}) => {

    const [isCartOpen,setIsCartOpen]= useState(false);
    const [cartItems,setCartItems] = useState([]);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));

    }

    const value = {isCartOpen,setIsCartOpen, addItemsToCart,cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;


}