import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../asserts/crown.svg";


const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <span className="logo">
                        <CrownLogo className="logo"></CrownLogo>
                    </span>
                </Link>
                <div className="nav-links-container">
                    <Link className="" to="/shop">
                        shop
                    </Link>
                    <Link className="" to="/signIn">
                        sign in
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}


export default Navigation;