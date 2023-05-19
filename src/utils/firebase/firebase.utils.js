import { initializeApp } from 'firebase/app';
import {
    getAuth,
    getInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAyRP-BHwi7GJ9UyYBfKdjD33rLnGUwtU",
    authDomain: "crwn-clothing-db-7ad4b.firebaseapp.com",
    projectId: "crwn-clothing-db-7ad4b",
    storageBucket: "crwn-clothing-db-7ad4b.appspot.com",
    messagingSenderId: "880155036253",
    appId: "1:880155036253:web:f46a6dc812062eabaf1bb4",
    measurementId: "G-JRQ2BC6HLW"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}