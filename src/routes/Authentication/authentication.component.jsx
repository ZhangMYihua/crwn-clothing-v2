import SignUp from "../../components/Sign-up/Sign-up.component";
import SignIn from "../../components/Sign-in/Sign-in.component";
import './authentication.styles.scss'
const Authentication = () => {
  // ========== SIGN IN WITH GOOGLE REFIRECT ===========
  // const googleRedirect = async() =>{
  //   const response = await getRedirectResult(auth);
  //   if(response){
  //   const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }

  // }
  // useEffect(() => {
  //   googleRedirect()
  // } ,[])

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
