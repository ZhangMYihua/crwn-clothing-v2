// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2dMqIa0DJGZSLXuC2wh90FUlqh4EDg4M",
  authDomain: "crwn-clothing-db-b80bf.firebaseapp.com",
  projectId: "crwn-clothing-db-b80bf",
  storageBucket: "crwn-clothing-db-b80bf.appspot.com",
  messagingSenderId: "550453182265",
  appId: "1:550453182265:web:5ce4988c272109b76872e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: 'Select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
            })
        }
        catch (error){
            console.error();
        }
    }
    // if user exist do nothing

    // if user does not exist create a entry
}