import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toString().toLowerCase());
      batch.set(docRef, object); 
    });
    await batch.commit();
    console.log('done')
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
    
  
   }


  export const createUserDocumentFromAuth = async (userAuth, additioanalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    
    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const  createdAt = new Date();
    
    try {
        await setDoc(userDocRef, { displayName, email, createdAt, ...additioanalInformation });
      }
    catch (error) {
      console.log('error creating user' , error.message);
    }
  }
  return userDocRef;
  }


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}  

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}  

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)