import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from   'firebase/firestore'


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
