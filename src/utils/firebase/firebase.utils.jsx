import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import { 
    getFirestore,
    doc, 
    setDoc,
    getDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9CK8yYvrvl3EABU-gw350Z-xUSZVNg94",
    authDomain: "crwn-clothing-web-60707.firebaseapp.com",
    projectId: "crwn-clothing-web-60707",
    storageBucket: "crwn-clothing-web-60707.appspot.com",
    messagingSenderId: "834585172612",
    appId: "1:834585172612:web:d14383673ca2533f7f40d1"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid )

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        }
        catch (error) {
            console.log('error creating the user', error.message)
        }
    } 
    
    return userDocRef;

}