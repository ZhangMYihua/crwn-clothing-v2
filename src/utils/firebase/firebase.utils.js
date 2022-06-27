import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfl_atu4wuNHchn0wC0nZasT-X9AZZL0",
  authDomain: "crwn-clothing-v2-1838c.firebaseapp.com",
  projectId: "crwn-clothing-v2-1838c",
  storageBucket: "crwn-clothing-v2-1838c.appspot.com",
  messagingSenderId: "477168220352",
  appId: "1:477168220352:web:ce05fd4e77db763c999525",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
