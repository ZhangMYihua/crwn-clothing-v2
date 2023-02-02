import { initializeApp }from 'firebase/app'
import {
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

import  {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBpCTzjefdulmMZKD83ZHG1hdEI9PZ1R6g",
  authDomain: "crwn-clothing-db-27e17.firebaseapp.com",
  projectId: "crwn-clothing-db-27e17",
  storageBucket: "crwn-clothing-db-27e17.appspot.com",
  messagingSenderId: "28502527286",
  appId: "1:28502527286:web:4bd5988f62f6f29700f797"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})



export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

const db = getFirestore()

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  

//if user data does not exist
  // create/set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth; 
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user')
    }
  }
  
  return userDocRef   
}
 

export const createAuthUserWithEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

