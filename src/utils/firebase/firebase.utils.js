// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaghGz2vYofAx0YQxOJU2xqg9ryoqWlDE",
  authDomain: "crwn-clothing-db-9946c.firebaseapp.com",
  projectId: "crwn-clothing-db-9946c",
  storageBucket: "crwn-clothing-db-9946c.appspot.com",
  messagingSenderId: "31342630333",
  appId: "1:31342630333:web:4c6131b77326a450bb6ed4",
};

//=============== Initialize Firebase=================================

const app = initializeApp(firebaseConfig);

//==============Auth and Provider======================
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//=======================================

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//==================Writing User details to DB  -  FireStore ==========================================================================================

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  //=============== Fetching the Data =====================
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //New USER   -   if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  //return userDoc
  return userDocRef;
};

//==================Creating Auth in Firebase using email and password=====================================================================

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//==================Creating Auth in Firebase using email and password=====================================================================

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
