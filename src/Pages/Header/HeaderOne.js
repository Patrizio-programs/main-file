import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-active" : ""}`}>
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <Link to='/'><img src="https://i.ibb.co/6NjLqpx/logo-upscaled.png"  style={{ 
         width: '100%', 
         maxWidth: '100px', 
         height: 'auto', 
         objectFit: 'cover' 
       }} alt="" /></Link>
                    </div>
                    <div className="header__area-box-main-menu one">
                        <ul className="mobile__menu" style={{ display: `${mobileToggle ? "block" : "none"}` }}>
                            <li>
                                <Link to="/">Home</Link>
                            
                            </li>
                            <li>
                                <Link to="/portfolio-details">Portfolio</Link>
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
                        <div className="sidebar-close-btn one" onClick={() => setSideHeaderToggle(!sideHeaderToggle)}> <i className="fal fa-times"></i> </div>
                        
                       
                            
                                    
                       
                        <div className="header__area-box-sidebar-popup-follow-us">
                            <h4 className="mb-25">Wanna hire me for a job?</h4>
                            <div className="header__area-box-sidebar-popup-follow-us-social">
                                Let's talk about it!
                                <br></br>

                                <img src="https://i.ibb.co/JsThbx4/5125591491643812922-121.jpg" alt="5125591491643812922-121" border="0"></img>
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
