import {initializeApp} from 'firebase/app'
import{
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEs1OC3Tce1nCCnpTQwGPDPvWC5rRQD64",
    authDomain: "crwn-cloathing-amd.firebaseapp.com",
    projectId: "crwn-cloathing-amd",
    storageBucket: "crwn-cloathing-amd.appspot.com",
    messagingSenderId: "249753949688",
    appId: "1:249753949688:web:4c2318e8b503974fb8b20d"
  };
  
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const GoogleProvider= new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    promt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,GoogleProvider);
export const signInWithGoogleRedirect =()=> signInWithRedirect(auth,GoogleProvider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object)=>{
    const docRef= doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object)
  })

  await batch.commit();
  console.log ("done");
};

export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db,'categories');
  const q =query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapShot)=>docSnapShot.data())
//   .reduce((acc,docSnapshot)=>{
//     const{title,items} = docSnapshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc
//   },{});
//   return categoryMap
};

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={})=> {
  const userDocRef = doc (db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch(error){
        console.log('ERROR', error.message)
    }

  }
  return userDocRef
};
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}
export const signOutUser = async () =>  await signOut(auth);

export const onAuthStateChangedListener =(callBack)=>{
  onAuthStateChanged(auth,callBack);
}