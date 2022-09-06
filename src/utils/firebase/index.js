import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSe_Cg_suOOtc_gQ_KNejVtuNh3p7ae68",
  authDomain: "e-commerce-barath.firebaseapp.com",
  projectId: "e-commerce-barath",
  storageBucket: "e-commerce-barath.appspot.com",
  messagingSenderId: "748294340078",
  appId: "1:748294340078:web:5fe3666d54dcc9f7e9e2ff",
  measurementId: "G-MLFR2TY24K",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
