import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
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

const providerGoogle = new GoogleAuthProvider()

providerGoogle.setCustomParameters({
  prompt: "select_account"
})

export  const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle);
export const signInWithGoogleWithRedirect = () => signInWithRedirect(auth, providerGoogle);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additonnalInformation = {displayName: 'mike'}) => {
  if(!userAuth)return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {displayName, email, createdAt, ...additonnalInformation})
    } catch (error) {
      console.error('error creatin user ', error.message)
    }
  }
  return userDocRef
}

export const creatAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password)return
 return await createUserWithEmailAndPassword(auth, email, password)
}