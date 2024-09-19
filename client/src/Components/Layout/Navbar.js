import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title="Contact Keeper", icon="fas fa-id-card-alt" }) => {
    return (
        <div className="navbar bg-primary text-white py-3 px-4 ">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul className="navbar-nav flex-row gap-4">
                <li className="nav-item">
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
                </li>
            </ul>
        </div>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

export default Navbar