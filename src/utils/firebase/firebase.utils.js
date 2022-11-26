import {initializeApp} from 'firebase/app';
import {
   getAuth, 
   signInWithRedirect, 
   signInWithPopup, 
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged
} 
from 'firebase/auth';

import {
   getFirestore,
   doc,  // allows us to retrive a document instance from our Firestore database
   getDoc,  // acess the data in the document instance
   setDoc   // set the data in the document instance
} from 'firebase/firestore';

/*
   initializeApp creates an app instance based off of some type of config.
   This config is an object that allows us to attach this Firebase app instance
   to that Firebase app instance that we created in firebase.google.com
*/

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAAgbPw0D3B8WkYzvm_MFmxmky4CSOeVRU",
   authDomain: "crwn-clothing-db-c73ed.firebaseapp.com",
   projectId: "crwn-clothing-db-c73ed",
   storageBucket: "crwn-clothing-db-c73ed.appspot.com",
   messagingSenderId: "520328840221",
   appId: "1:520328840221:web:55421fcf71a365432ab2f4"
 };
 
 // Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);

 // using Google authentication: need to instantiate  GoogleAuthentication object
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({
   prompt: 'select_account'   // force user to always select an account
 });

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

 export const db = getFirestore();

 // store user authentication data and store inside of Firestore
 export const createUserDocumentFromAuth = async (
   userAuth, 
   additionalInfo = {}
) => {

   if(!userAuth) {
      return;
   }

   // Get a DocumentReference instance
   // db = instance of db above
   // users = users collection
   // userAuth.id = unique id used to get the document reference
   const userDocRef = doc(db, 'users', userAuth.uid);
   // console.log(userDocRef);

   //get the document referred to this DocumentReference (userDocRef)
   const userSnapshot = await getDoc(userDocRef);
   // console.log(userSnapshot);
   // console.log(userSnapshot.exists()); //see if the document exists

   //if user data does not exist: create/set the document with the data from userAuth in my collection
   if(!userSnapshot.exists()) {

      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo
         });

      } catch(error) {
         console.log('error creating the user', error.message);
      }

      return userDocRef;
   }
 }

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) {
      return;
   }

   return await createUserWithEmailAndPassword(auth, email, password)
 };

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) {
      return;
   }

   return await signInWithEmailAndPassword(auth, email, password)
 };

 export const signOutUser = async () => await signOut(auth);

 // signing in or signing out is an auth change during which the callback will be executed
 export const onAuthStateChangedListener = (callback) => {

   if(callback) {
      onAuthStateChanged(auth, callback);
   }
 }