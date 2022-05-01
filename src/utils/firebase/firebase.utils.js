import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-YynoUn_ovjZr7HAUk-lMFZHK_sSOXQE",
  authDomain: "crwn-clothing-db-9bf99.firebaseapp.com",
  projectId: "crwn-clothing-db-9bf99",
  storageBucket: "crwn-clothing-db-9bf99.appspot.com",
  messagingSenderId: "155586035976",
  appId: "1:155586035976:web:6007e738f833478cbf2cbd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // checks for an existing documentRef
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
    return userDocRef;
  }

  //if user data exists

  //if user data does not exist

  //create/set document with the data from userAuth in my collection

  // return userDocRef
};
