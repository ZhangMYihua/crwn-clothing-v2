import "./nav.styles.scss"
import { Fragment} from 'react'
import { Outlet ,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import { signOutUser } from '../../utils/firebase/FireBase.utils'
import CartIcon from '../../component/cart-icon/CartIcon'
import CartDropdown from "../../component/cart-dropdown/CartDropDown"
import { useSelector,useDispatch } from "react-redux"
import { setIsCartOpen } from "../../slices/cartSlice"

export const Nav = () => {
  const {currentUser}=useSelector((state)=>state.user);
  const { isCartOpen} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
          <div onClick={()=>dispatch(setIsCartOpen(!isCartOpen))} > <CartIcon /></div>
         
          {isCartOpen&&<CartDropdown />}
       
         
         
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
