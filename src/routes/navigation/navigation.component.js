import { Outlet, Link} from 'react-router-dom';
// Logo
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg'
// Styles
import './navigation.styles.scss'


const Navigation = () => (
  <>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
      <CrwnLogo className='logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
)

export default Navigation;