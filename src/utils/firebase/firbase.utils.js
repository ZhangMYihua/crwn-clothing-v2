import { identifier, importNamespaceSpecifier } from '@babel/types';
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
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

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users' , userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName , email } = userAuth;
    const createdAt =new Date();

    try{
      await setDoc(userDocRef,{ 
        displayName,
        email,
        createdAt
      })
    }catch (error){
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
}
