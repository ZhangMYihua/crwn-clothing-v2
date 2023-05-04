import { wait } from '@testing-library/user-event/dist/utils';
import {initializeApp}from 'firebase/app';
// To use Sing In whit Google!
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
 } from 'firebase/auth';

// To use Firebase 
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'


// To implement Sing In whit Google!
const firebaseConfig = {
    apiKey: "AIzaSyDJysv-cUOayYtrdS5WLOtlGNc51N7CJWc",
    authDomain: "crw-clothing-db-ea99a.firebaseapp.com",
    projectId: "crw-clothing-db-ea99a",
    storageBucket: "crw-clothing-db-ea99a.appspot.com",
    messagingSenderId: "992187303205",
    appId: "1:992187303205:web:3e467e819b2a5efe4746cc"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({

    prompt:"select_account"
  });

  // Sign Up whit Google*****************************************

  export const auth = getAuth();

  export const singnWhitGoooglePopup = () => signInWithPopup(auth,googleProvider);

  export  const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);


  // Context and Sing Out**************************************

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)





// To implement FireStore DB!

const db = getFirestore();

// *********Adding Collections**************
 export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  
const collectionRef = collection(db,collectionKey);
const batch = writeBatch(db);

objectsToAdd.forEach((object) => {
  const docRef = doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef,object);

});

await batch.commit();
console.log("Done!");


}

// *********get Collections from Firestore**************

export const getCategoriesAndDocuments = async () => {

  const collectionRef = collection(db,'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot)=>{
    const {title , items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});
  
  return categoryMap;
}


// create User*************************

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

  if(!userAuth) return;
// doc use 3 arguments 1- database (db), 2-collections ,3- identifier (UNIQUE IDENTIFIER {uid})
const userDocRef = doc(db,'users',userAuth.uid);

console.log(userDocRef);

 const userSnapDoc = await getDoc(userDocRef);
 console.log(userSnapDoc);
 console.log(userSnapDoc.exists());


 if (!userSnapDoc.exists()) {

    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
     console.log("error creating the user", error.message);
    }

    return userDocRef
}

}


//  How to implement Sing In whit Email and Password!!
 
export const createAuthUserWhitEmailAndPassword = async (user,password) => {


  return await createUserWithEmailAndPassword(auth,user,password);
  

 }

 export const singInAuthUserWhitEmailAndPassword = async (user,password) => {


  return await signInWithEmailAndPassword(auth,user,password);
  

 }


