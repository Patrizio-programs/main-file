import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Down from "./Down";
import { Home, News, Page, Portfolio } from "./Menu";

const HeaderThree = ({variant}) => {
    const [sideHeaderToggle, setSideHeaderToggle] = useState(false);   
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    }, []);

    return (
        <>
        <div className={`header__area three ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-active" : ""}`}>
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <Link to="/"> <img src="assets/img/logo-2.png" alt="" /> </Link>
                    </div>
                    <div className="header__area-box-sidebar d-block">
                        <div className="header__area-box-sidebar-popup-icon"> 
                            <span onClick={() => setSideHeaderToggle(!sideHeaderToggle)}><i className="fal fa-bars"></i></span> 
                        </div>
                    </div>
                    <div className={sideHeaderToggle ? 'header__area-box-sidebar-popup active' : 'header__area-box-sidebar-popup'}>
                    <div className="sidebar-close-btn" onClick={() => setSideHeaderToggle(!sideHeaderToggle)}> <i className="fal fa-times"></i> </div>
                        <div className="header__area-box-sidebar-popup-logo">
                            <Link to="/"> <img src="assets/img/logo-2.png" alt="" /> </Link>
                        </div>
                        <div className="header__area-menu">
                            <ul className="side__menu">
                                <li className="menu-item-children">
                                    <Link to="">Home</Link>
                                    <Down>
                                        <ul className="submenu">
                                            <Home />
                                        </ul>
                                    </Down>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="">Page</Link>
                                    <Down>
                                        <ul className="submenu">
                                            <Page />
                                        </ul>
                                    </Down>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="">Portfolio</Link>
                                    <Down>
                                        <ul className="submenu">
                                            <Portfolio />
                                        </ul>
                                    </Down>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="">News</Link>
                                    <Down>
                                        <ul className="submenu">
                                            <News />
                                        </ul>
                                    </Down>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="contact__info">
                            <h4 className="mb-25">Contact Info</h4>
                            <div className="contact__info-list"> <Link to="tel:89709806789"><i className="fal fa-phone-alt"></i>897 098 067 89</Link> <Link to="mailto:info@webmail.com"><i className="fal fa-envelope-open-text"></i>info@webmail.com</Link> <Link to="#"><i className="fal fa-map-marker-alt"></i>12/A, New Boston, NYC</Link> </div>
                        </div>
                    </div>
                    <div className={sideHeaderToggle ? 'sidebar-overlay show' : 'sidebar-overlay'}></div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default HeaderThree;