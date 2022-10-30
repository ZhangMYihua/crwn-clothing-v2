import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,NextOrObserver, User, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { Category } from '../../store/categories/category-types';

const firebaseConfig = {
    apiKey: "AIzaSyBX1yQM8qRZNJ1SIkTYEGqwFIjkHf-NY0s",
    authDomain: "crown-clothing-f5b14.firebaseapp.com",
    projectId: "crown-clothing-f5b14",
    storageBucket: "crown-clothing-f5b14.appspot.com",
    messagingSenderId: "1077076181956",
    appId: "1:1077076181956:web:45f8e4b8c40d757bd95a91"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
 
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export type ObjectToAdd = {
    title: string;
  }

  export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]
    ): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toString().toLowerCase());
      batch.set(docRef, object); 
    });
    await batch.commit();
    console.log('done')
  };

  export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
  }

export type AdditioanalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

  export const createUserDocumentFromAuth = async (userAuth: User, additioanalInformation = {} as AdditioanalInformation
    ): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const  createdAt = new Date();
    
    try {
        await setDoc(userDocRef, { displayName, email, createdAt, ...additioanalInformation });
      }
    catch (error) {
      console.log('error creating user' , error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
  }


export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}  

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}  

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth ,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}