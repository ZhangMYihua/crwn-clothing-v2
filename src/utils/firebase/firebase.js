// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBedyAnSBueV-Q5ToOBjaP8v9HMuNafnAI',
	authDomain: 'crown-clothing-db-8a3a3.firebaseapp.com',
	projectId: 'crown-clothing-db-8a3a3',
	storageBucket: 'crown-clothing-db-8a3a3.appspot.com',
	messagingSenderId: '400074190320',
	appId: '1:400074190320:web:23d26a4b897a71b5ea4135',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapShot = await getDoc(userDocRef);
	console.log(userSnapShot);
	console.log(userSnapShot.exists());
	//check if userdata exists
	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	return userDocRef;
	//if userdata doesnt exist create
	//return userDocRef
};
