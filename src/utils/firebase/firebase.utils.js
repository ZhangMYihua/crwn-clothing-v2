import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlgwDQ0QmfqXvJhcxgBl7cERVUHHpneRg",
  authDomain: "crwn-clothing-db-fb8ff.firebaseapp.com",
  projectId: "crwn-clothing-db-fb8ff",
  storageBucket: "crwn-clothing-db-fb8ff.appspot.com",
  messagingSenderId: "497330185354",
  appId: "1:497330185354:web:79c881993ecf4f93ebf973",
  measurementId: "G-GYSRR0STE0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);