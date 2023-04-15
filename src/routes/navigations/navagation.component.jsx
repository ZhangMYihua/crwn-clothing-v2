import { Fragment } from "react/cjs/react.production.min";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>{/* a fragment is usefel when u dont want to renderf some spefcic html  element for example if i just wanta  div that repersents teh navagtion and 
      if i want the componets that repersent the pages  down beloew aka <outlet/> we dont need a wrapping div just a Frragment */}
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
            {/* Link component is esentially a anchor tag what it does it properly dynamically uses th correct broweer u have
            to tell the link where we want to go we give it the to property */}
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in'>
                SIGN IN
            </Link>
          </div>
        </div>
      <Outlet/> {/* is used to render the nested compoennts */}
      </Fragment>
    )
  }

export default Navigation;