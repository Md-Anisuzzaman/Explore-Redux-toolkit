import React from 'react'
import  Side_Navbar_Header  from './Side_Navbar_Header'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <Side_Navbar_Header></Side_Navbar_Header>
                    <Navbar></Navbar>
                </nav>
            </header>
        </>
    );
};

export default Header;