// // UserProvider.js
// import { useDispatch } from 'react-redux';
// import { setUser } from './userSlice';
// import { useEffect } from 'react';
// import { onAuthStateChangedLisstener } from '../utils/firebase/FireBase.utils';
// import { createUserDocumentFromAuth } from '../utils/firebase/FireBase.utils';
// // ... (previous code)

// export const UserContext=createContext({
//     currentUser: null,
//     setCurrentUser:()=>null
// });
// const UserProvider = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedLisstener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
     
//       dispatch(setUser(user)); // Dispatch the action to set the user in Redux
//     });

//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export { UserProvider };
