import { Fragment } from 'react/cjs/react.production.min'
import React from 'react'
import { useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../Assets/swag.svg'
import './NavigationStyles.scss'

import { UserContext } from '../../Kontext/FontextContext'
import { OpenClose } from '../../Kontext/OpenCloseCardContext'

import { signAuthOut } from '../../utility/firebase/FirebaseComponent'

import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu'
import ShopingCart from '../../Components/ShopingCart/ShopingCart'

function NavigationComponent() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(OpenClose)

  const SignOut = async () => {
    await signAuthOut()
    setCurrentUser()
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <ShopingCart />
        </div>
        {isCartOpen && <DropDownMenu />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationComponent
