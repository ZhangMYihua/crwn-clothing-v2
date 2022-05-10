import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	//find if cartItems contains productToAdd
	const existingItem = cartItems.find(item => item.id === productToAdd.id);
	//if found, increment quantity
	if (existingItem) {
		return cartItems.map(item =>
			item.id === productToAdd.id ? { ...item, qty: item.qty + 1 } : item
		);
	}
	//return new Array with modified cart items / new cart item
	return [...cartItems, { ...productToAdd, qty: 1 }];
};

const calculateCartTotal = (items) => items.reduce((prev, curr) => prev.qty + curr.qty, 0)

export const CartContext = createContext({
	cartIsOpen: false,
	cartItems: [],
    cartTotal: 0,
	setCartIsOpen: () => null,
	addItemToCart: () => null
});

export const CartProvider = ({ children }) => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.qty, 0)
      setCartTotal(newCartCount);
    }, [cartItems])


	const addItemToCart = productToAdd => {
		setCartItems(addCartItem(cartItems, productToAdd));
        setCartTotal(calculateCartTotal(cartItems));
	};

	const value = { cartIsOpen, setCartIsOpen, cartItems, addItemToCart, cartTotal };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
