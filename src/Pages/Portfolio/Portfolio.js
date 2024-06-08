import React from 'react';
import { Link } from 'react-router-dom';
import FooterThree from '../Footer/FooterThree';
import Header from '../Header/HeaderFour';
import { pageTitle } from '../PageTitle';

const Portfolio = () => {
    pageTitle('Portfolio');
    return (
        <>
            <Header></Header>
            <div className="portfolio__column section-padding">
                <div className="container">
                    <div className="row"> 
                        <div className="col-xl-12 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-1.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Business Growth</span>
                                    <h4><Link to="/portfolio-details-two">Web Design</Link></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-2.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Photography</span>
                                    <h4><Link to="/portfolio-details-two">Tesla Energy</Link></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-3.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Marketing</span>
                                    <h4><Link to="/portfolio-details-two">Global Banking</Link></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-4.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Solution</span>
                                    <h4><Link to="/portfolio-details-two">Photography</Link></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 t-center">
                            <Link className="theme-btn-1" to="">All Project<i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterThree></FooterThree>
        </>
    );
};

export default Portfolio;