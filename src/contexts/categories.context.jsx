import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangeListner, createUserDocumentFromAuth, signOutUser } from '../utils/firebase/firebase.js';
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.js';
//as the actual value you want to access
export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategories] = useState({});
	const value = { categoriesMap, setCategories };
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategories(categoryMap);
		};
		getCategoriesMap();
	}, []);

	//add  data batch
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
