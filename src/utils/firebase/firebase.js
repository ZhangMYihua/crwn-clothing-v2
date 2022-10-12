import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX1yQM8qRZNJ1SIkTYEGqwFIjkHf-NY0s",
    authDomain: "crown-clothing-f5b14.firebaseapp.com",
    projectId: "crown-clothing-f5b14",
    storageBucket: "crown-clothing-f5b14.appspot.com",
    messagingSenderId: "1077076181956",
    appId: "1:1077076181956:web:45f8e4b8c40d757bd95a91"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
 
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const  createdAt = new Date();
    
    try {
        await setDoc(userDocRef, { displayName, email, createdAt});
      }
    catch (error) {
      console.log('error creating user' , error.message);
    }
  }
  return userDocRef;
  }