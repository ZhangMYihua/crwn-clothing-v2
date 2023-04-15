// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc} from 'firebase/firestore';// doc lets us retrieve documents inside our firestore db 
// getdoc gets the doucments data or setting it with setdoc
// doc is the instance of it

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsLyyjZdkJweHlq-JJIqVx-MxhLPRsJGw",
  authDomain: "crwn-clothing-db-ed9cc.firebaseapp.com",
  projectId: "crwn-clothing-db-ed9cc",
  storageBucket: "crwn-clothing-db-ed9cc.appspot.com",
  messagingSenderId: "736316634206",
  appId: "1:736316634206:web:0ffd26bf450cdd672630cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);  
} ;
// this singleton instance allows us now to tell firebase when we want to get a document or set a document or anythign reasltead to our database 
export const db = getFirestore();
// this method is a asycn function that recvives some user authention object since thats what were getting back from our firebase auth aka google assignment 
export const createUserDocFromAuth = async (userAuth) => {
  // we want the function to take thbe data and store that inside of firestore
  // the proccess of doing it is to see if there is a exisitng doc reference 
  const userDocRef = doc(db, 'users', userAuth.uid);//takes 3 argues 1 the db 2 a collection 3 a identifery that tells it what it was 
  console.log(userDocRef);
  //snapshot is kinda like the data its also a specfic kind of object 
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
// if it dosent exisit then it will return true  so we want to create and set the doc
  if(!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createdAt = new Date();//just so when we know these usersa are singing in

    try{
      await setDoc(userDocRef,  {
        displayName,
        email,
        createdAt
      });
    }
    catch(error){
      console.log('error creating the user ', error.message);
    }
  };
  //if user data does not exisit 
  //create  / set the coudment with the data from userAuth in my collection

  //if user data exist 
  return(userDocRef);
};