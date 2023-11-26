import React, { useState } from 'react'
import "./nav.styles.scss"
import { Fragment,useContext} from 'react'
import { Outlet ,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/FireBase.utils'
import CartIcon from '../../component/cart-icon/CartIcon'
import { CartContext } from '../../contexts/Cart.context'
import CartDropdown from "../../component/cart-dropdown/CartDropDown"


export const Nav = () => {
  const{currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)
 
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
          {
            currentUser?(
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
            <Link className='nav-link n1' to='/auth'>
            SIGN IN
          </Link>
          )
          }
          <div > <CartIcon /></div>
         
          {isCartOpen&&<CartDropdown />}
       
         
         
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
