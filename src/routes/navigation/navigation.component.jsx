import {Link, Outlet} from 'react-router-dom';
import {Fragment} from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
               <Link className='nav-logo' to='/'>
                   <CrownLogo classname='logo' />
               </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation