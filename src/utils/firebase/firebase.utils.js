import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh5bma8h0iDjlkXw5CIo38Mjh-Uc86xkQ",
  authDomain: "crwn-project-b7c92.firebaseapp.com",
  projectId: "crwn-project-b7c92",
  storageBucket: "crwn-project-b7c92.appspot.com",
  messagingSenderId: "796259811438",
  appId: "1:796259811438:web:a1f93837dfc7f55298a67f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export  const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
}