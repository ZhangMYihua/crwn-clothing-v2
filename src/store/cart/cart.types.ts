export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
  SET_CART_COUNT: 'cart/SET_CART_COUNT',
  SET_CART_TOTAL: 'cart/SET_CART_TOTAL',
};


export type CartItem = {
  id : number;
  name: string;
  imageUrl: string;
  price: number;
  quantity:number;
}



export type CartItemsState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};
