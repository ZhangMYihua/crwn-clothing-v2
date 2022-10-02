import { createContext,useState} from "react";

export const addCartItem = (itemToAdd,cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};



// // --------------------------------------------my var

// const addCartItem = (itemToAdd,cartItems)=>{

// const index = cartItems.findIndex(item => item.id === itemToAdd.id)
// if (index=== -1) {
//   itemToAdd.quantity = 1;
//   cartItems.push(itemToAdd);

// } else ++ cartItems[index].quantity;


// return cartItems 
// }
// // --------------------------------------------------------------



export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen:()=>{},
  cartItems:[],
  // setCartItems: ()=>{},
  addItemToCart: ()=>{},

});
export const CartProvider =({children}) =>{

const [cartItems,setCartItems] = useState([]);
const [isCartOpen,setIsCartOpen] = useState(false);
const addItemToCart = (itemToAdd) =>{
  
  setCartItems(addCartItem(itemToAdd,cartItems))
  
}

const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart};

return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}
