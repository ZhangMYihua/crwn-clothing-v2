import { createContext,useState,useEffect} from "react";

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
  itemsCount: 0,
  totalPrice: 0,
  removeItemFromCheckout: ()=>{},
  decQuantity: ()=>{},

});
export const CartProvider =({children}) =>{

const [cartItems,setCartItems] = useState([]);
const [isCartOpen,setIsCartOpen] = useState(false);
const [itemsCount, setItemsCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(()=>{ 
  const newTotal = cartItems.reduce((total,item)=> total + (item.price * item.quantity) ,0);
  setTotalPrice(newTotal);
},[cartItems])

const deleteItem =(currentItem,cartItems)=>{
 return cartItems.filter(item => item.id !== currentItem.id)  
 
  // setCartItems(newCartItems);
  
};
const decItemQuantity =(currentItem,cartItems)=>{
  if (currentItem.quantity <= 1) return cartItems.filter(item => item.id !== currentItem.id);
    else{
      return cartItems.map(item => {
        if (item.id ===currentItem.id) return {...currentItem,quantity: currentItem.quantity-1};
          else return item; 
      })
      
      };
  
}; 

const removeItemFromCheckout = (currentItem)=>{
  setCartItems(deleteItem(currentItem,cartItems))
}

const decQuantity = (currentItem)=>{
  setCartItems(decItemQuantity(currentItem,cartItems))
}

const addItemToCart = (itemToAdd) =>{
  
  setCartItems(addCartItem(itemToAdd,cartItems))
  
}

useEffect(()=>{
  const newCount = cartItems.reduce((total,item)=> total + item.quantity,0);
  setItemsCount(newCount);
}, [cartItems])

const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,itemsCount,totalPrice,removeItemFromCheckout,decQuantity};

return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}
