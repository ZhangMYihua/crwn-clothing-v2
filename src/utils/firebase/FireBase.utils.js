// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'


import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs

} from "firebase/firestore"
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBr1HFlEFjhRokk1epSSVz6cVvxUFyXj-k",
  authDomain: "fashionsitedb.firebaseapp.com",
  projectId: "fashionsitedb",
  storageBucket: "fashionsitedb.appspot.com",
  messagingSenderId: "293022294471",
  appId: "1:293022294471:web:71bb2da817d6e47f2979e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
console.log(app.automaticDataCollectionEnabled);
export const auth=getAuth();
const signInWithGooglePopup= () => signInWithPopup(auth,provider);
export {signInWithGooglePopup};

export const db=getFirestore();

const createUserDocumentFromAuth=async(userAuth,aditionalInfo)=>{
  const userDocRef=doc(db,'users',userAuth.uid)
  const snapshot=await getDoc(userDocRef)
  const {displayName,email}=userAuth;
  const createdAt=new Date();
  if(!snapshot.exists()){
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...aditionalInfo
      })
    }catch(er){
      console.log("error creating user",er);
    }
  }  
  return userDocRef;

}
export {createUserDocumentFromAuth};

const createAuthWithEmailAndPassword=async(email,password)=>{
  if(!email||!password)return;
  return await createUserWithEmailAndPassword(auth,email,password);

}
export{createAuthWithEmailAndPassword}


const signInAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email||!password)return;
  return await signInWithEmailAndPassword(auth,email,password)
}
export{signInAuthUserWithEmailAndPassword}


const signOutUser=async()=>{
  await signOut(auth)
}
export{signOutUser}


export const onAuthStateChangedLisstener=(callback)=>onAuthStateChanged(auth,callback)


//products related

export const  addCollectionAndDocument=async(collectionkey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionkey)
  const batch=writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);

  });
  await batch.commit();
}

export const getCategoriesAndDocuments=async()=>{
  const collectionRef=collection(db,'categories')
  const q=query(collectionRef);
  const querySnapShot=await getDocs(q);
  const categoryMap=querySnapShot.docs.reduce((acc,docsnaps)=>{
    const {title,items}=docsnaps.data();
    acc[title.toLowerCase()]=items;
    return acc
  },{});
  return categoryMap;
  
}