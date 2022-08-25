import { Outlet,Link} from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss"
const Navigation =()=>{
  return(
    <>
    <div className="navigation">
       <Link className="nav-link" to="/">
       <CrwnLogo className="logo"/>
        </Link>
        <div className="NAV-links-container">
        <Link className="nav-link" to="/shop">SHOP</Link>
        <Link className="nav-link" to="/auth"><button>SIGN IN</button></Link>
        </div>
    </div>
    <Outlet/>
    </>
    )
}


export default Navigation