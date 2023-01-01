import React from 'react'
import { Link } from 'react-router-dom';

const LeftSidebar = () => {

    const toggleShow = (e) => {
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle('show')

    }
    return (
        <>
            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* User Profile*/}
                    <div className="user-profile">
                        <div className="user-pro-body">
                            <div>
                                <img
                                    src="/assets/images/users/2.jpg"
                                    alt="user-img"
                                    className="img-circle"
                                />
                            </div>
                            <div className="dropdown">
                                <a
                                    href="#/"
                                    className="dropdown-toggle u-dropdown link hide-menu"
                                    data-bs-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Steave Gection <span className="caret" />
                                </a>
                                <div className="dropdown-menu animated flipInY">
                                    <a href="#/" className="dropdown-item">
                                        <i className="ti-user" /> My Profile
                                    </a>
                                    <a href="#/" className="dropdown-item">
                                        <i className="ti-wallet" /> My Balance
                                    </a>
                                    <a href="#/" className="dropdown-item">
                                        <i className="ti-email" /> Inbox
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#/" className="dropdown-item">
                                        <i className="ti-settings" /> Account Setting
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#/" className="dropdown-item">
                                        <i className="fas fa-power-off" /> Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav" style={{ overflowY: "scroll", height: "calc(100vh - 180px)" }}>
                        <ul id="sidebarnav">
                            <li>
                                <a
                                    onClick={(e) => toggleShow(e)}
                                    className="has-arrow waves-effect waves-dark"
                                    href="#/"
                                >
                                    <div>
                                        <i className="far fa-circle" />
                                        <span className="hide-menu">
                                            User Management
                                            <span className="badge rounded-pill bg-cyan ms-auto">
                                                4
                                            </span>
                                        </span>
                                    </div>
                                </a>
                                <ul className="collapse">
                                    <li>
                                        <Link to="/dashboard/user">All user</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/user/create">Create </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/user/edit">Edit </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/user/details">Details </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    onClick={(e) => toggleShow(e)}
                                    className="has-arrow waves-effect waves-dark"
                                    href="#/"
                                >
                                    <div>
                                        <i className="far fa-circle" />
                                        <span className="hide-menu">
                                           Product Management
                                            <span className="badge rounded-pill bg-cyan ms-auto">
                                                4
                                            </span>
                                        </span>
                                    </div>
                                </a>
                                <ul className="collapse">
                                    <li>
                                        <Link to="/dashboard/product">All Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/product/create">Product Create </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/product/edit">Product Edit</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/product/addproduct">AddProduct</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/product/details">Product Details </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default LeftSidebar;