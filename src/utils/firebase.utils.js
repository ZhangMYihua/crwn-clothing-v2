// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    doc, //retrieve document instances inside of our fire store database
    getDoc, //get document data
    setDoc // set document data
} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHxEtTbZfGQEy_1JlXAR1Yt7BsqYmw-wE",
  authDomain: "crwnlearn-clothing-db.firebaseapp.com",
  projectId: "crwnlearn-clothing-db",
  storageBucket: "crwnlearn-clothing-db.appspot.com",
  messagingSenderId: "1020642940211",
  appId: "1:1020642940211:web:24e273430861aae9299a46",
  measurementId: "G-6X6YJFQSKF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account" //every time somebody interacts with our provider, 
    // we want to always force them to select an account.
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    // await because Google needs to do this asynchronously to get the document
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    // check if user data exits
    // if not, create/set the doc with data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    // if yes, return userDocRef
    return userDocRef;
}