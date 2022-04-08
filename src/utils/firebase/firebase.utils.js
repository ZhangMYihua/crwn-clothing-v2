

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoazw1_Mxy_utAmBU8dQOO0ppwM2-mnSs",
  authDomain: "home-chore-tracker-6e22a.firebaseapp.com",
  projectId: "home-chore-tracker-6e22a",
  storageBucket: "home-chore-tracker-6e22a.appspot.com",
  messagingSenderId: "491040623592",
  appId: "1:491040623592:web:4529ef492194298aaeb25d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect=()=> signInWithRedirect(auth, provider)

export const db = getFirestore();



export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth){
    return
  }
  const userDocRef = doc(db, 'crownusers', userAuth.uid);

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
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword=async(email, password)=>{
  if(!email || !password){
    return
  }
createAuthUserWithEmailAndPassword(auth, email, password)

}