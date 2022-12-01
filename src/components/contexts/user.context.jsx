import { createContext, useEffect, useState } from "react";
import { 
   onAuthStateChangedListener, 
   signOutUser, 
   createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

/*
   This user context is just a glorified PARENT component -- it is wrapping our
   App compoenent -- that is just leveraging useState and all we're doing is exposing 
   the value (currentUser) and the setter of this value EXTERNALLY.

   Whatever values you want the component to be able to expose, you can also
   expose through a context.
*/


/*
   UserContext is the actual  we want to access.
   Initialize the context to the inital state.
   I.e., currentUser is null and the setter function 
   is an empty function that returns null
*/
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null
});

/*
   For every context that gets built for us, there is a .Provider.
   This provider is that component that will wrap around any other components
   that need access to the value inside the context.

   value: holds the actual contextual value
*/
/*
   The destructured {children} parameter is the component that UserProvider
   is wrapping. For example,

      <UserProvider>
         <App />      
      </UserProvider>

   The App component, in this case, is the children. Therefore, in this line:

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

   we are simply rendering the children components.

   The value attribute holds the contextual value (in this case: const value = {currentUser, setCurrentUser})
*/
export const UserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const value = {currentUser, setCurrentUser};

   useEffect(() => {

      //sign out no matter what the moment this component mounts
      signOutUser();

      //this allows us to unsubscribe whenever this component unmounts;
      //failure to unsubscribe listeners (ie., stop listening) leads to memory leaks

      //the moment this listener mounts, it will check the authentication state
      //automatically when you initialize the listener
      const unsubscribe = onAuthStateChangedListener((user) => {
         if(user) {
            createUserDocumentFromAuth(user);
         } else {
            // console.log(user);
            setCurrentUser(user);
         }

      });
      
/*
   From React docs:

      Q: Why did we return a function from our effect? 
      A: This is the optional cleanup mechanism for effects. Every effect may return 
         a function that cleans up after it. This lets us keep the logic for adding 
         and removing subscriptions close to each other. They’re part of the same effect!

      Q: When exactly does React clean up an effect? 
      A: React performs the cleanup when the component unmounts. However, as we learned earlier, 
         effects run for every render and not just once. This is why React also cleans up effects 
         from the previous render before running the effects next time. We’ll discuss why this helps 
         avoid bugs and how to opt out of this behavior in case it creates performance issues later below.
*/

      return unsubscribe;
   }, [])

   // this provider is essentially allowing any of its child component to access
   // the current value AND access the setter function ANYWHERE inside the component tree
   // that is nested within this actual provider value
 
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}