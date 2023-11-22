// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
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

export const auth=getAuth();
const signInWithGooglePopup= () => signInWithPopup(auth,provider);
export {signInWithGooglePopup};

export const db=getFirestore();
const createUserDocumentFromAuth=async(userAuth)=>{
  const userDocRef=doc(db,'users',userAuth.uid)
  const snapshot=await getDoc(userDocRef)
  const {displayName,email}=userAuth;
  console.log(snapshot);
  const createdAt=new Date();
  console.log(snapshot.exists());
  if(!snapshot.exists()){
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      })
      console.log("hi");
    }catch(er){
      console.log("error creating user",er);
    }
  }
  return userDocRef;

}
export {createUserDocumentFromAuth};