import {initializeApp}from 'firebase/app';
// To use Sing In whit Google!
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
     GoogleAuthProvider
 } from 'firebase/auth';

// To use Firebase 
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({

    prompt:"select_account"
  });

  export const auth = getAuth();

  export const singnWhitGoooglePopup = () => signInWithPopup(auth,provider);

// To implement Firestore DB!

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
        await setDoc(userDocRef, {displayName,email,createdAt});
    } catch (error) {
     console.log("error creating the user", error.message);
    }

    return userDocRef
}


}





