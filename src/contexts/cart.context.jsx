import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	//find if cart items contains productToAdd
	const foundItem = cartItems.find((item) => item.id === productToAdd.id);

	if (!foundItem) {
		return [...cartItems, { ...productToAdd, quantity: 1 }];
	} else {
		return cartItems.map((item) => {
			if (item.id === productToAdd.id) {
				item.quantity = item.quantity + 1;
				return item;
			} else {
				return item;
			}
		});
	}

	//if found increment quantity
	//return new array with modified cart items / new cart items
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const foundCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
	if (foundCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== cartItemToRemove.id);
	} else {
		return cartItems.map((item) => {
			if (item.id === cartItemToRemove.id) {
				item.quantity = item.quantity - 1;
				return item;
			} else {
				return item;
			}
		});
	}
};
const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

//as the actual value you want to access
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	clearItemsFromCart: () => {},
	cartCount: 0,
	total: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
		setTotal(totalPrice);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const removeItemToCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};
	const clearItemsFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};
	const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemsFromCart, cartItems, cartCount, total };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
