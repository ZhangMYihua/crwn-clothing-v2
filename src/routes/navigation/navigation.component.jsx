import React from "react"
import { Fragment,useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firbase.utils"

const Navigation = () => {

    //to use user info from context
    const{ currentUser }=useContext(UserContext)




    return(
      <Fragment>
        <div className = 'navigation'>
            <Link className="logo-container" to='/'>
            <CrwnLogo className= 'Logo'/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to = '/shop'>
                    Shop
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
                        :(<Link className="nav-link" to = '/auth'>
                        Sign In
                    </Link>)
                      }
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation