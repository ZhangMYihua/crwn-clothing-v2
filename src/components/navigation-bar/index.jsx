import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/svg/crown.svg'
import styles from './nav.module.scss'
const NavigationBar = () => {
  return(<>
      <div className={styles.navigation}>
        <Link to={'/'} className={styles.logoContainer}><CrwnLogo /></Link> 
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to={'shop'}>Shop</Link> 
        </div>
      </div>
    <Outlet />
    </>)
}

export default NavigationBar