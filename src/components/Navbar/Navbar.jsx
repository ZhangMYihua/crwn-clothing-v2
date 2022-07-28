import './Navbar.scss'
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <Link className="nav-comp home-logo" to="/">
                    <div>Home</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-comp shop-nav" to="/shop">
                        <div className="nav-comp shop-nav">Shop</div>
                    </Link>
                    <Link className="nav-comp contact-nav" to="/contact">
                        <div className="nav-comp contact-nav">Contact</div>
                    </Link>
                    <Link className="nav-comp signIn-nav" to="/signIn">
                        <div className="nav-comp signIn-nav">Sign In</div>
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