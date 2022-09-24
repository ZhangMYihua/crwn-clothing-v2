import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBa7Lvyv5sCzQ2WQjseQOF3YjgZhGSamEA',
  authDomain: 'crwn-clothing-db-60aad.firebaseapp.com',
  projectId: 'crwn-clothing-db-60aad',
  storageBucket: 'crwn-clothing-db-60aad.appspot.com',
  messagingSenderId: '558517885856',
  appId: '1:558517885856:web:665e11b3e0b34559af22c5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
