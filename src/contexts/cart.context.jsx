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

//as the actual value you want to access
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems]);
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
