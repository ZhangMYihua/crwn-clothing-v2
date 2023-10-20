import {initializeApp} from 'firebase/firebase-app';

import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query,getDocs} from   'firebase/firestore';
// import { Form } from 'react-router-dom';


const firebaseConfig = {
    apiKey: "AIzaSyDXg2ZgCk_J9GHEFNo_1mFiugbOeLVCSqI",
    authDomain: "crownwil-db.firebaseapp.com",
    projectId: "crownwil-db",
    storageBucket: "crownwil-db.appspot.com",
    messagingSenderId: "784657526562",
    appId: "1:784657526562:web:421ca613e8070ca265ff7b"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = (collectionkey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
    
    batch.commit();
    console.log('done');
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q =query(collectionRef);
    
// helper function

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },{})

    return categoryMap;
  }

  export const createUserDocumentFromAuth = async (userAuth, additionalInfromation = {}) => {

    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();


    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfromation
      });
    }catch (error){
      console.log('error creating user', error.message);
    }
    return userDocRef;
   };
  
  } 

  //------------------------Create With Email and Password ---------------------------//

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password ) return;
   return await createUserWithEmailAndPassword(auth, email, password);
  }

    //------------------------Sign In With Email and Password ---------------------------//

    export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
      if(!email || !password ) return;
     return await signInWithEmailAndPassword(auth, email, password);
    }

    export const signOutUser = () => signOut(auth);
    export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);