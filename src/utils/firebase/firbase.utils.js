import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth , additionalInformation = {displayName : ''}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users' , userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);


  if(!userSnapshot.exists()) {
    const { displayName , email } = userAuth;
    const createdAt =new Date();

    try{
      await setDoc(userDocRef,{ 
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch (error){
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser =  async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback, errorCallback, completeCallback)