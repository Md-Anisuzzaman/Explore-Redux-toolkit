import React from 'react'

const LeftSidebar = () => {
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
                                    src="../assets/images/users/2.jpg"
                                    alt="user-img"
                                    className="img-circle"
                                />
                            </div>
                            <div className="dropdown">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle u-dropdown link hide-menu"
                                    data-bs-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Steave Gection <span className="caret" />
                                </a>
                                <div className="dropdown-menu animated flipInY">
                                    {/* text*/}
                                    <a href="javascript:void(0)" className="dropdown-item">
                                        <i className="ti-user" /> My Profile
                                    </a>
                                    {/* text*/}
                                    <a href="javascript:void(0)" className="dropdown-item">
                                        <i className="ti-wallet" /> My Balance
                                    </a>
                                    {/* text*/}
                                    <a href="javascript:void(0)" className="dropdown-item">
                                        <i className="ti-email" /> Inbox
                                    </a>
                                    {/* text*/}
                                    <div className="dropdown-divider" />
                                    {/* text*/}
                                    <a href="javascript:void(0)" className="dropdown-item">
                                        <i className="ti-settings" /> Account Setting
                                    </a>
                                    {/* text*/}
                                    <div className="dropdown-divider" />
                                    {/* text*/}
                                    <a href="pages-login.html" className="dropdown-item">
                                        <i className="fas fa-power-off" /> Logout
                                    </a>
                                    {/* text*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">--- PERSONAL</li>
                            <li>
                                <a
                                    className="has-arrow waves-effect waves-dark"
                                    href="javascript:void(0)"
                                    aria-expanded="false"
                                >
                                    <i className="icon-speedometer" />
                                    <span className="hide-menu">
                                        Dashboard
                                        <span className="badge rounded-pill bg-cyan ms-auto">
                                            4
                                        </span>
                                    </span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="index.html">Minimal </a>
                                    </li>
                                    <li>
                                        <a href="index2.html">Analytical</a>
                                    </li>
                                    <li>
                                        <a href="index3.html">Demographical</a>
                                    </li>
                                    <li>
                                        <a href="index4.html">Modern</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="has-arrow waves-effect waves-dark"
                                    href="javascript:void(0)"
                                    aria-expanded="false"
                                >
                                    <i className="ti-layout-grid2" />
                                    <span className="hide-menu">Apps</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="app-calendar.html">Calendar</a>
                                    </li>
                                    <li>
                                        <a href="app-chat.html">Chat app</a>
                                    </li>
                                    <li>
                                        <a href="app-ticket.html">Support Ticket</a>
                                    </li>
                                    <li>
                                        <a href="app-contact.html">Contact / Employee</a>
                                    </li>
                                    <li>
                                        <a href="app-contact2.html">Contact Grid</a>
                                    </li>
                                    <li>
                                        <a href="app-contact-detail.html">Contact Detail</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="has-arrow waves-effect waves-dark"
                                    href="javascript:void(0)"
                                    aria-expanded="false"
                                >
                                    <i className="ti-email" />
                                    <span className="hide-menu">Inbox</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="app-email.html">Mailbox</a>
                                    </li>
                                    <li>
                                        <a href="app-email-detail.html">Mailbox Detail</a>
                                    </li>
                                    <li>
                                        <a href="app-compose.html">Compose Mail</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="has-arrow waves-effect waves-dark"
                                    href="javascript:void(0)"
                                    aria-expanded="false"
                                >
                                    <i className="ti-palette" />
                                    <span className="hide-menu">
                                        Ui Elements
                                        <span className="badge rounded-pill bg-primary text-white ms-auto">
                                            25
                                        </span>
                                    </span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="ui-cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="ui-user-card.html">User Cards</a>
                                    </li>
                                    <li>
                                        <a href="ui-buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="ui-modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="ui-tab.html">Tab</a>
                                    </li>
                                    <li>
                                        <a href="ui-tooltip-popover.html">
                                            Tooltip &amp; Popover
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui-tooltip-stylish.html">Tooltip stylish</a>
                                    </li>
                                    <li>
                                        <a href="ui-sweetalert.html">Sweet Alert</a>
                                    </li>
                                    <li>
                                        <a href="ui-notification.html">Notification</a>
                                    </li>
                                    <li>
                                        <a href="ui-progressbar.html">Progressbar</a>
                                    </li>
                                    <li>
                                        <a href="ui-nestable.html">Nestable</a>
                                    </li>
                                    <li>
                                        <a href="ui-range-slider.html">Range slider</a>
                                    </li>
                                    <li>
                                        <a href="ui-timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="ui-typography.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="ui-horizontal-timeline.html">
                                            Horizontal Timeline
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui-session-timeout.html">Session Timeout</a>
                                    </li>
                                    <li>
                                        <a href="ui-session-ideal-timeout.html">
                                            Session Ideal Timeout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui-bootstrap.html">Bootstrap Ui</a>
                                    </li>
                                    <li>
                                        <a href="ui-breadcrumb.html">Breadcrumb</a>
                                    </li>
                                    <li>
                                        <a href="ui-bootstrap-switch.html">Bootstrap Switch</a>
                                    </li>
                                    <li>
                                        <a href="ui-list-media.html">List Media</a>
                                    </li>
                                    <li>
                                        <a href="ui-ribbons.html">Ribbons</a>
                                    </li>
                                    <li>
                                        <a href="ui-grid.html">Grid</a>
                                    </li>
                                    <li>
                                        <a href="ui-carousel.html">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="ui-offcanvas.html">Offcanvas</a>
                                    </li>
                                    <li>
                                        <a href="ui-date-paginator.html">Date-paginator</a>
                                    </li>
                                    <li>
                                        <a href="ui-dragable-portlet.html">Dragable Portlet</a>
                                    </li>
                                    <li>
                                        <a href="ui-spinner.html">Spinner</a>
                                    </li>
                                    <li>
                                        <a href="ui-scrollspy.html">Scrollspy</a>
                                    </li>
                                    <li>
                                        <a href="ui-toasts.html">Toasts</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
        </>
    );
};

export default LeftSidebar;