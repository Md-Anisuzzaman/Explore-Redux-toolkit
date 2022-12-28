import React from 'react'

export const Side_Navbar_Header = () => {
    return (
        <>
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    <b>
                        <img
                            src="/assets/images/logo-icon.png"
                            alt="homepage"
                            className="dark-logo"
                        />
                        <img
                            src="/assets/images/logo-light-icon.png"
                            alt="homepage"
                            className="light-logo"
                        />
                    </b>
                    <span>
                        <img
                            src="/assets/images/logo-text.png"
                            alt="homepage"
                            className="dark-logo"
                        />
                        {/* Light Logo text */}
                        <img
                            src="/assets/images/logo-light-text.png"
                            className="light-logo"
                            alt="homepage"
                        />
                    </span>
                </a>
            </div>
        </>
    );
};
export default Side_Navbar_Header;