// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //getting document ref from the firestore DB ==>getting column
  const userDocRef = doc(db, "users", userAuth.uid);

  //Getting the columns data
  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  if (!userSnapshot.exists()) {
    console.log("inside if block ");

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      console.log({
        displayName,
        email,
        createdAt,
      });
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
  //return userDoc
};
