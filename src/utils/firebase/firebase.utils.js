// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {
    getFirestore, doc,getDoc, setDoc,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW1xSuTWPyz-5uOTWflpw2HrfKkHHzjbQ",
  authDomain: "crwn-clothing-705ef.firebaseapp.com",
  projectId: "crwn-clothing-705ef",
  storageBucket: "crwn-clothing-705ef.appspot.com",
  messagingSenderId: "1022176766759",
  appId: "1:1022176766759:web:6fd04ee57efe44e758d702",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users',userAuth.uid);
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
      // if user data does not exist
      const{displayName, email} = userAuth;
      const createdAt = new Date();
      // create / set the document with the data from userAuth in my collection
      try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
      } catch(error){
        console.log('error crating the user', error.message)
      }
    }
 
 return userDocRef;
}