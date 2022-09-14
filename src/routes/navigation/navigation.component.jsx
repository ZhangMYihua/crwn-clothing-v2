import { Outlet,Link } from 'react-router-dom';
import { Fragment } from 'react';
//Importing the Logo SVG as Components
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
//Importing the styles files
import '../navigation/navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo' />
            </Link> 
            {/* Link tag behaves like the anchor tag but with some additional functionalities.*/}           
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
            </div>
          {/* <h1> This is the navBar.</h1> */}
        </div>
        <Outlet></Outlet>
      </Fragment>
    );
}

export default Navigation