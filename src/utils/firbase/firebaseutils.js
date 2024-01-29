// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ0HvEvE8I-86V0JnWfYXbFi59PW9a-Kw",
  authDomain: "crown-ecommerce-ztm-39b1c.firebaseapp.com",
  projectId: "crown-ecommerce-ztm-39b1c",
  storageBucket: "crown-ecommerce-ztm-39b1c.appspot.com",
  messagingSenderId: "270362813833",
  appId: "1:270362813833:web:ba85f5cae464488d9aad58",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
