import React from "react"
import { Fragment,useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.jsx'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firbase.utils"
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from "./navigation.styles"

const Navigation = () => {

    //to use user info from context
    const { currentUser }= useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)



    return(
      <Fragment>
        <NavigationContainer >
            <LogoContainer to='/'>
            <CrwnLogo className= 'Logo'/>
            </LogoContainer>

            <NavLinks>
                <NavLink to = '/shop'>
                    Shop
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                        :(<NavLink to = '/auth'>
                        Sign In
                    </NavLink>)
                      }
                      <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation