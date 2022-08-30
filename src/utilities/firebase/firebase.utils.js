import { initializeApp } from 'firebase/app';

import {
  signInWithRedirect,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArGk_qPGzVPDBZwj-eWJ4JMos0oxWHEzQ',
  authDomain: 'crwn-clothing-db-72a6b.firebaseapp.com',
  projectId: 'crwn-clothing-db-72a6b',
  storageBucket: 'crwn-clothing-db-72a6b.appspot.com',
  messagingSenderId: '949442988895',
  appId: '1:949442988895:web:c32255b249c1e96aac44ea',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  promt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

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
      console.log(' error creating the usage', error.message);
    }
  }

  return userDocRef;
};
