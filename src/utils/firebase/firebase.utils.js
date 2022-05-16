import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtvN5FWXvx3eKvKjswk4zjqokYlBHXpA8",
  authDomain: "crown-clothing-db-41a84.firebaseapp.com",
  projectId: "crown-clothing-db-41a84",
  storageBucket: "crown-clothing-db-41a84.appspot.com",
  messagingSenderId: "653224631946",
  appId: "1:653224631946:web:ee906beddc2b951d66d773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})
// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => { 
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) { 
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                createdAt,
                displayName,
                email
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userDocRef
}