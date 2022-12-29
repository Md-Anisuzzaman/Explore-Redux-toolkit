import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const toggleSidebar = (e) => {
        e.preventDefault();
        document.querySelector("body").classList.toggle('mini-sidebar');
    }
    return (
        <>
            <div className="navbar-collapse">
                <ul className="navbar-nav d-flex justify-content-between w-100 ">
                    <li className="nav-item">
                        <span onClick={toggleSidebar} className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark">
                            <i className="fa fa-align-left" />
                        </span>
                    </li>
                    <li className="nav-item">
                    {/* d-none d-md-block d-lg-block */}
                        <form className="app-search mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search here..."
                            />
                        </form>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;