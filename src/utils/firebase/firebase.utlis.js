import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHFY-Iquf1SnOoBcQcab_5yjq5MEtUl7o",
  authDomain: "crown-clothing-db-9f454.firebaseapp.com",
  projectId: "crown-clothing-db-9f454",
  storageBucket: "crown-clothing-db-9f454.appspot.com",
  messagingSenderId: "790976367910",
  appId: "1:790976367910:web:e3df2a90ed8506243d05e7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
