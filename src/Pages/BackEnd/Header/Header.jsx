import React from 'react'
import { SideNavbarHeader }  from '../Sidebar/SideNavbarHeader'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <SideNavbarHeader></SideNavbarHeader>
                    <Navbar></Navbar>
                </nav>
            </header>
        </>
    );
};

export default Header;