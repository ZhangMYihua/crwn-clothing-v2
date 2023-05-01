import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss'

export const Navigation = () => {
    return (
        <Fragment>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <CrwnLogo className={'logo'} />
                </Link>
                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to={'/shop'}>
                        SHOP
                    </Link>
                </div>
                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to={'/signin'}>
                        SignIn
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}