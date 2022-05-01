import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from "firebase/auth";

//doc method is used to get a document instance
//getDoc and setDoc methods are used to retrieve the data from the document
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDgiejTVlGbDQcE6KoDSHsTt3AZqKn9JmI",
	authDomain: "crown-db-37935.firebaseapp.com",
	projectId: "crown-db-37935",
	storageBucket: "crown-db-37935.appspot.com",
	messagingSenderId: "472501099368",
	appId: "1:472501099368:web:43482a4e49a70c6c6a94dd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

//providers can be multiple, with different parameters to sign into your
// application
provider.setCustomParameters({
	prompt: "select_account",
});

//below is auth is a single way of authenticating into your web application
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//below getfirestore creates a database for us named db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	//the 3 arguments being passed to below doc method are "database instance, collection name, unique identifier"
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	//below helps check if the user already exists in the firebase database
	//document collection
	console.log(userSnapshot.exists());

	//if user data does not exists, below executes
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error reating the user", error.message);
		}
	}
	//if user data exists, below executes
	return userDocRef;
};
