import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
