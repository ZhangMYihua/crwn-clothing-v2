import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangeListner, createUserDocumentFromAuth, signOutUser } from '../utils/firebase/firebase.js';
import PRODUCTS from '../shop-data.json';
//as the actual value you want to access
export const ProductsContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products, setProducts };
	useEffect(() => {}, []);
	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
