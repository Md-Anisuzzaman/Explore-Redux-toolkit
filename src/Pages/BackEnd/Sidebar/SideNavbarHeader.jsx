import React from 'react'
import { Link } from 'react-router-dom';

export const SideNavbarHeader = () => {
    return (
        <>
            <div className="navbar-header">
                <Link className="navbar-brand" href="index.html">
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
                </Link>
            </div>
        </>
    );
};
export default SideNavbarHeader;