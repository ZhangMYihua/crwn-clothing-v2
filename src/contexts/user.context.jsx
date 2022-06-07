import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangeListner, createUserDocumentFromAuth, signOutUser } from '../utils/firebase/firebase.js';

//as the actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	useEffect(() => {
		const unsubcribe = onAuthStateChangeListner((user) => {
			// signOutUser();
			console.log({ user });
			if (user) {
				createUserDocumentFromAuth(user);
			}

			setCurrentUser(user);
		});
		return unsubcribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
