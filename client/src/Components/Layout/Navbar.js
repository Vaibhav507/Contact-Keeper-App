import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title="Contact Keeper", icon="fas fa-id-card-alt" }) => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
       <Fragment>
            <li className="nav-item">Hello { user && user.name }</li>
            <li className="nav-item">
                <a onClick = {onLogout} href="#!" className="link-light">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
       </Fragment>
    );

    const guestLinks = (
        <Fragment>
             <li className="nav-item">
                    <Link to="/register" className="nav-link text-white">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">Login</Link>
                </li>
        </Fragment>
     );

    return (
        <div className="navbar bg-primary text-white py-3 px-4 ">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul className="navbar-nav flex-row gap-4">
                {isAuthenticated ? authLinks : guestLinks}
                {/* <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-white">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">Login</Link>
                </li> */}
            </ul>
        </div>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

export default Navbar