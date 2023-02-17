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
        <Link classNam="logo-container" to="/">
          <Logo classNam="logo" />
        </Link>
        <div classNam="nav-links-container">
          <Link to='/'>Home</Link>
          <Link to='shop'>Shop</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationComponent
