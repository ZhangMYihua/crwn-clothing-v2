import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDix1ku6KAKbRwPqnAby-BZAXZDTQzxIcY',
  authDomain: 'crwn-clothing-db-99ba7.firebaseapp.com',
  projectId: 'crwn-clothing-db-99ba7',
  storageBucket: 'crwn-clothing-db-99ba7.appspot.com',
  messagingSenderId: '195955107367',
  appId: '1:195955107367:web:7df84d7fee68a259135002',
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

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
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
