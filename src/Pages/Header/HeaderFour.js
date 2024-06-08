import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, News, Page, Portfolio } from "./Menu";
import DropDown from "./DropDown";

export default function Header({ variant }) {
    const [isSticky, setIsSticky] = useState(false);
    const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);
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
        <div className={`header__area ${ variant ? variant : "" } header__sticky all-page ${isSticky ? "header__sticky-active" : ""}`}>
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <Link to='/'><img src="assets/img/logo-2.png" alt="" /></Link>
                    </div>
                    <div className="header__area-box-main-menu">
                        <ul className="mobile__menu" style={{ display: `${mobileToggle ? "block" : "none"}` }}>
                            <li className="menu-item-has-children">
                                <Link to="/">Home</Link>
                                <DropDown>
                                    <ul className="sub-menu">
                                    <Home />
                                    </ul>
                                </DropDown>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="">Page</Link>
                                <DropDown>
                                    <ul className="sub-menu">
                                    <Page />                            
                                    </ul>
                                </DropDown>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="">Portfolio</Link>
                                <DropDown>
                                    <ul className="sub-menu">
                                    <Portfolio />                        
                                    </ul>
                                </DropDown>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="">News</Link>
                                <DropDown>
                                    <ul className="sub-menu">
                                    <News />                       
                                    </ul>
                                </DropDown>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <span className={mobileToggle ? "mobile-menu mobile-menu-active" : "mobile-menu"} onClick={() => setMobileToggle(!mobileToggle)}>
                            <span></span>
                        </span>
                    </div>
                    <div className="header__area-box-sidebar">
                        <div className="header__area-box-sidebar-popup-icon"> 
                            <span onClick={() => setSideHeaderToggle(!sideHeaderToggle)}><i className="fal fa-bars"></i></span> 
                        </div>
                    </div>
                    <div className={sideHeaderToggle ? 'header__area-box-sidebar-popup active' : 'header__area-box-sidebar-popup'}>
                        <div className="sidebar-close-btn" onClick={() => setSideHeaderToggle(!sideHeaderToggle)}> <i className="fal fa-times"></i> </div>
                        <div className="header__area-box-sidebar-popup-logo">
                            <Link to='/'><img src="assets/img/logo-2.png" alt="" /></Link>
                        </div>
                        <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien. Fusce vulputate magna in magna pellentesque in mauris dignissim, imperdiet risus ac, congue nunc.</p>
                        <div className="header__area-box-sidebar-popup-contact">
                            <h4 className="mb-25">Contact Us</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item two"> <i className="far fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name" required="required" /> 
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item two"> <i className="far fa-envelope-open"></i>
                                            <input type="text" name="email" placeholder="Email Address" required="required" /> 
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item two"> <i className="fal fa-pen"></i>
                                            <textarea name="message" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="header__area-box-sidebar-popup-contact-form-item two">
                                            <button className="theme-btn-1" type="submit">Submit Now<i className="fal fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="header__area-box-sidebar-popup-follow-us">
                            <h4 className="mb-25">Follow Us</h4>
                            <div className="header__area-box-sidebar-popup-follow-us-social two">
                                <ul>
                                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link> </li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link> </li>
                                    <li><Link to="#"><i className="fab fa-instagram"></i></Link> </li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={sideHeaderToggle ? 'sidebar-overlay show' : 'sidebar-overlay'}></div>                         
                </div>
            </div>
        </div>
        </>
    );
}
