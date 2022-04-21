import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAq-4bCmHvd_K_LURuugrsFewmPBKQEzqU',
	authDomain: 'crwn-clothing-v2-5c04e.firebaseapp.com',
	projectId: 'crwn-clothing-v2-5c04e',
	storageBucket: 'crwn-clothing-v2-5c04e.appspot.com',
	messagingSenderId: '994557692164',
	appId: '1:994557692164:web:dfeefa29af586df1ebe851'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('There was an error creating the user', error.message)
        }
    }
    return userDocRef
}
