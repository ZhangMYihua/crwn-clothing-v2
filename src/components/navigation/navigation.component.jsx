import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div>
                <h1>Navigation</h1>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;