import { Fragment } from 'react/cjs/react.production.min'
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/swag.svg'
import './NavigationStyles.scss'

function NavigationComponent() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='shop'>Shop</Link>
          <Link className="nav-link" to='signIn'>Sign-in</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationComponent
