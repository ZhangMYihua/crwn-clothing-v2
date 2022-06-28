import React from "react"
import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
    return(
      <Fragment>
        <div className = 'navigation'>
            <Link className="logo-container" to='/'>
            <CrwnLogo className= 'Logo'/>
            </Link>

            <div className="nav-links-container">
                {/* <Link className="nav-link" to = '/shop'>
                    Shop
                </Link> */}
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation