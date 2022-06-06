import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKBxQsBeo5mqRwotmYZza5fYFQQ327onQ",
  authDomain: "crown-clothing-db-c8be0.firebaseapp.com",
  projectId: "crown-clothing-db-c8be0",
  storageBucket: "crown-clothing-db-c8be0.appspot.com",
  messagingSenderId: "334678912682",
  appId: "1:334678912682:web:4d7b35fdbe1983f7b36ad3",
  measurementId: "G-QSCKBTJYXB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
