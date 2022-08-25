import {initializeApp} from "firebase/app"
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBkily37zDo8loN3zsZ3f9YUAL0azu_f-8",
    authDomain: "crwn-clothing-db-f2584.firebaseapp.com",
    projectId: "crwn-clothing-db-f2584",
    storageBucket: "crwn-clothing-db-f2584.appspot.com",
    messagingSenderId: "491842044339",
    appId: "1:491842044339:web:74ba79171cf93df7f94bc6",
    measurementId: "G-1J2GBQTFS9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

export const auth = getAuth()

export const signInwithGooglePopup = ()=> signInWithPopup(auth,googleProvider)
 export const signInWithGoogleRedirect =()=> signInWithRedirect(auth,googleProvider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
   if(!userAuth)

    console.log("createUserDocumentFromAuthfn")
      const userDocRef = doc(db, "users", userAuth.uid)
      //  console.log(userDocRef,"usertDocRef")
       const userSnapshot = await getDoc(userDocRef)
      //  console.log(userSnapshot.exists(),"userSnapshot")

     
     //if user data dosen't exists
     // create/set the document  with the data from userAuth in my collection
     if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
         const createdAt = new Date()
         try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
         }catch(error){
          console.log(error,"error created by user")
         }

     }
       return userDocRef
}


export const createAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}


