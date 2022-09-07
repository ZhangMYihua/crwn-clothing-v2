import { UserContext } from "../../contexts/user.content"
import { CartContext } from "../../contexts/cart.context"
import { Outlet,Link} from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

const   Navigation =()=>{
const {currentUser,setCurrentUser} = useContext(UserContext)
const  {isCartOpen} = useContext(CartContext)

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
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">SHOP</Link>
           {currentUser?(<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>):<Link className="nav-link" to="/auth"><button>SIGN IN</button></Link>}
      <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/> }
        
    </div>
   
    <Outlet/>
    </>
    )
}


export default Navigation