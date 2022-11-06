import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlgwDQ0QmfqXvJhcxgBl7cERVUHHpneRg",
  authDomain: "crwn-clothing-db-fb8ff.firebaseapp.com",
  projectId: "crwn-clothing-db-fb8ff",
  storageBucket: "crwn-clothing-db-fb8ff.appspot.com",
  messagingSenderId: "497330185354",
  appId: "1:497330185354:web:79c881993ecf4f93ebf973",
  measurementId: "G-GYSRR0STE0"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation={}
) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch(err) {
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithWEmmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};