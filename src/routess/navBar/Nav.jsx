import React from 'react'
import "./nav.styles.scss"
import { Fragment } from 'react'
import { Outlet ,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
export const Nav = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link n1' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
