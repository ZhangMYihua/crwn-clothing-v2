import { Fragment,useContext } from "react";
import {signOutUser} from "../../../utils/firebase/firebase.utils"
import { userContext } from "../../../contexts/user.context";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg"
import "./navigation.style.scss"




const Navigation =  ()=>{
  const {currentUser,setCurrentUser} = useContext(userContext);
  const signOutHandler = async ()=>{
    await signOutUser();
    setCurrentUser(null);
  }
    return( 
      <Fragment>
        <div className = 'navigation'>
          <Link className ='logo-container' to='/'>
            <CrwnLogo className ='logo'/>
          </Link>
          <div className ='nav-links-container'>
            <Link className="nav-link" to='/shop'>SHOP</Link>
            <Link className="nav-link" to='/auth'>{
            !currentUser ? (<span className="nav-link">SIGN IN</span>) : 
            (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)}
            </Link>

          </div>

        </div>   
        <Outlet/>   
      </Fragment>
    )
  };
export default Navigation;