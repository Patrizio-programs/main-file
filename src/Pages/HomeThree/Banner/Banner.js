import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner__area-three" style={{backgroundImage: `url('assets/img/banner-3.jpg')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-three-content">
                            <h1>Design <span>Development</span></h1>
                             <Link className="theme-btn-1" to="/contact">Get A Quote <i className="fal fa-long-arrow-right"></i></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-three-bottom">
                <div className="container custom-container">
                    <div className="banner__area-three-bottom-icon">
                        <ul>
                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;