import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBr2x6E-elCMRLmOfPwKjlP79tvaALQkDs',
  authDomain: 'crwn-clothing-bb953.firebaseapp.com',
  projectId: 'crwn-clothing-bb953',
  storageBucket: 'crwn-clothing-bb953.appspot.com',
  messagingSenderId: '7621111211',
  appId: '1:7621111211:web:1fa76ec056356feffaf6ee',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: 'select_account',
//   login_hint: 'user@example.com',
// });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
