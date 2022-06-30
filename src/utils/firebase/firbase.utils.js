import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAePusKt8RyYcxmJqfSWNfPMYCBBoQHf7c",
    authDomain: "crwn-clothing-db-4b6cb.firebaseapp.com",
    projectId: "crwn-clothing-db-4b6cb",
    storageBucket: "crwn-clothing-db-4b6cb.appspot.com",
    messagingSenderId: "128875697128",
    appId: "1:128875697128:web:911aec0d52d632e86eca5d"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
