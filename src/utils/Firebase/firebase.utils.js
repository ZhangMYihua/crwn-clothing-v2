import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore , doc , getDoc, setDoc} from 'firebase/firestore'

// ======= APP INITIAL SETUP =================
const firebaseConfig = {
  apiKey: "AIzaSyCX79ydP2GaIJ8mZtX-jiIl8rDOG5xixVk",
  authDomain: "crwn-cloathing-db-e4f48.firebaseapp.com",
  projectId: "crwn-cloathing-db-e4f48",
  storageBucket: "crwn-cloathing-db-e4f48.appspot.com",
  messagingSenderId: "1028169163744",
  appId: "1:1028169163744:web:396015d2598f2cbc8d0185"
};


const app = initializeApp(firebaseConfig);


// ============== AUTH SETUPS ===============
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth , provider);



// ===============FIRE STORE SETUP ===================

export const db = getFirestore(); // Database inside The console

// Creates the user into the dataBase using auth 
export const createUserDocumentFromAuth = async(userAuth) => { 
    const userDocRef = doc(db, 'users', userAuth.uid); // from the DATABASE - db ,COLLECTION- users ,DOCUMENT - uid
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); // get data deom the document 
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    //if user data does not exist
    // create/set  the document wiht the data from userAuth in my collection 
    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();


        try {
            await setDoc(userDocRef , {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating the user' , error.message);
        }
    }
    
    // if user data exists
    //return userDocRef

    return userDocRef;
   

}



