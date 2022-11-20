// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
    } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore,
    doc,
    getDoc,
    setDoc, 
    collection, 
    writeBatch,
    query,
    getDocs    
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2dMqIa0DJGZSLXuC2wh90FUlqh4EDg4M",
  authDomain: "crwn-clothing-db-b80bf.firebaseapp.com",
  projectId: "crwn-clothing-db-b80bf",
  storageBucket: "crwn-clothing-db-b80bf.appspot.com",
  messagingSenderId: "550453182265",
  appId: "1:550453182265:web:5ce4988c272109b76872e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    promt: 'Select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


// CRUD DB USERS
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const colletionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const docRef = doc(colletionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })
    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }
        catch (error){
            console.error();
        }
    }
}

export const createAuthUserWithEmailPassword = async (email,password) => {
    if(!email||!password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWtihEmailPassword = async (email,password) => {
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}