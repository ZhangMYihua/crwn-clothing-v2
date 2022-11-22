// initialize firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCODw91tAeDSfgiRh4AxIQ1R0gWOKa99SI',
	authDomain: 'shoop-62e55.firebaseapp.com',
	projectId: 'shoop-62e55',
	storageBucket: 'shoop-62e55.appspot.com',
	messagingSenderId: '1026253348582',
	appId: '1:1026253348582:web:85df25e40dc45b59ca6527'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize google provider

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
// sign in Google Methods:
// pop up
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
// redirect
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);
// instantiate methods

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	//  if user data does not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createAt });
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}
	// if user data exist
	return userDocRef;
};
