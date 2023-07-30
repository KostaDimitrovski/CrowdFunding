import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import axios from '../../custom-axios/axios';
import companyImage from '../Images/companyImage.jpg';

const Header = () => {
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('JWT'));

    const handleLogout = () => {
        localStorage.removeItem('JWT');
        axios.defaults.headers.common['Authorization'] = null; // Clear the axios instance cache
        window.location.href = '/login';
        setAuthenticated(false);
    };

    return (
        <header className="header">
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed" style={{ backgroundColor: '#ffffff' }}>
                <a className="navbar-brand text-success" href="/fundingIsFun">
                    <img width={150} src={companyImage} alt="s" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link active text-success " to="/companies">
                                Companies
                            </Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link active text-success" to="/categories">*/}
                        {/*        Categories*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className="nav-link active text-success " to="/ceos">
                                CEOs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-success " to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        {authenticated ? (
                            <button className="btn btn-outline-info my-3 my-sm-0" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <div className="link-container">
                                <Link className="btn btn-outline-info my-2 my-sm-0" to="/login">
                                    Loginn
                                </Link>
                                <Link className="btn btn-outline-info my-2 my-sm-0" to="/register">
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Header;
