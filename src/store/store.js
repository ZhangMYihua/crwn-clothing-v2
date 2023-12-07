import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import userReducer from "../slices/userSlice"
import CategoriesMap from '../slices/CategoriesSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer,
    Categories:CategoriesMap
    // Add other reducers if needed

  },
});

export default store;
