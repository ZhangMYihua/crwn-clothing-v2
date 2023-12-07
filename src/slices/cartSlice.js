import { createSlice } from '@reduxjs/toolkit';

// Helper function to calculate total amount
const calculateTotalAmt = (cartItems) =>
  cartItems.reduce((total, cur) => total + cur.price * cur.quantity, 0);

// Helper function to save cart items and count to local storage
const saveToLocalStorage = (cartItems, cartCount) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartCount', cartCount.toString());
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartCount: parseInt(localStorage.getItem('cartCount')) || 0,
    totalAmt: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const cartItems = action.payload || [];
      const count = cartItems.reduce((total, itemQ) => total + itemQ.quantity, 0);
      const totalAmt = calculateTotalAmt(cartItems);

      // Save to local storage
      saveToLocalStorage(cartItems, count);

      return { ...state, cartItems, cartCount: count, totalAmt };
    },
    setIsCartOpen: (state, action) => ({
      ...state,
      isCartOpen: action.payload,
    }),
    removeItem: (state, action) => {
      const productId = action.payload.id;
      const updatedCartItems = state.cartItems.filter((item) => item.id !== productId);
      const totalAmt = calculateTotalAmt(updatedCartItems);
      const count = updatedCartItems.reduce((total, itemQ) => total + itemQ.quantity, 0);

      // Save to local storage
      saveToLocalStorage(updatedCartItems, count);

      return { ...state, cartItems: updatedCartItems, cartCount: count, totalAmt };
    },
    reduceItemQuantity: (state, action) => {
      const productId = action.payload.id;
      const updatedCartItems = state.cartItems
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0);

      const totalAmt = calculateTotalAmt(updatedCartItems);
      const count = updatedCartItems.reduce((total, itemQ) => total + itemQ.quantity, 0);

      // Save to local storage
      saveToLocalStorage(updatedCartItems, count);

      return { ...state, cartItems: updatedCartItems, cartCount: count, totalAmt };
    },
  },
});

export const {
  addItemToCart,
  setIsCartOpen,
  removeItem,
  reduceItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
