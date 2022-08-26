import { UserContext } from "../../contexts/user.content"
import { Outlet,Link} from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation =()=>{
const {currentUser,setCurrentUser} = useContext(UserContext)

const signOutHandler = async()=>{
  const res = await signOutUser()
  setCurrentUser(null)
  // console.log(res,"res======")
}

console.log(currentUser,"currentUser")
  return(
    <>
    <div className="navigation">
       <Link className="nav-link" to="/">
       <CrwnLogo className="logo"/>
        </Link>
        <div className="NAV-links-container">
        <Link className="nav-link" to="/shop">SHOP</Link>
           {currentUser?(<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>):<Link className="nav-link" to="/auth"><button>SIGN IN</button></Link>}
      
        </div>
    </div>
    <Outlet/>
    </>
    )
}


export default Navigation