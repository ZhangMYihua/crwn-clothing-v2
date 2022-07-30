import './Navbar.scss'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg';

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <Link className="logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    <Link className="nav-link" to="/signIn">
                        Sign In
                    </Link>
                    {/* <Link className="nav-comp cart-nav" to="/cart"> */}
                    <div className="nav-comp cart-nav">Cart</div>
                    {/* </Link> */}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar