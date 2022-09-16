// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDfiE_vhcT99GSA6K0nWYdqEM54sAQxGtI',
  authDomain: 'crwn-shop-db-bb8c4.firebaseapp.com',
  projectId: 'crwn-shop-db-bb8c4',
  storageBucket: 'crwn-shop-db-bb8c4.appspot.com',
  messagingSenderId: '972459965311',
  appId: '1:972459965311:web:e9648ac9613458c35f384a',
  measurementId: 'G-5SWCT824L2',
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserFromAuth = async (userAuth) => {
  const docReference = doc(db, 'user', userAuth.uid);
  const userSnapshot = await getDoc(docReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docReference, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return docReference;
};
